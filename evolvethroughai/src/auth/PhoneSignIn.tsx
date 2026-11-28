import { Phone } from 'lucide-react';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import type { ConfirmationResult, RecaptchaVerifier } from 'firebase/auth';
import { firebaseConfigured, firebaseServices } from './firebaseClient';

function phoneError(cause: unknown) {
  const code = typeof cause === 'object' && cause && 'code' in cause ? String(cause.code) : '';
  if (code === 'auth/invalid-verification-code') return 'That code is incorrect. Check the SMS and try again.';
  if (code === 'auth/code-expired') return 'That code has expired. Request a new code.';
  if (code === 'auth/too-many-requests') return 'Too many attempts. Please wait before trying again.';
  if (code === 'auth/operation-not-allowed' || code === 'auth/billing-not-enabled') return 'Phone sign-in is not enabled for this project yet. Please use Google for now.';
  if (code === 'auth/quota-exceeded') return 'SMS sign-in is temporarily unavailable. Please use Google.';
  return 'Phone verification could not be completed. Please try again or use Google.';
}
export function PhoneSignIn() {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [confirmation, setConfirmation] = useState<ConfirmationResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const captcha = useRef<HTMLDivElement>(null);
  const verifier = useRef<RecaptchaVerifier | null>(null);
  const alive = useRef(true);
  useEffect(() => { alive.current = true; return () => { alive.current = false; verifier.current?.clear(); verifier.current = null; }; }, []);
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (busy || !firebaseConfigured) return;
    setBusy(true); setError('');
    try {
      if (confirmation) { await confirmation.confirm(code); }
      else {
        const normalized = phone.replace(/[\s()-]/g, '');
        if (!/^\+[1-9]\d{7,14}$/.test(normalized)) throw new Error('phone-format');
        const { auth, authApi } = await firebaseServices();
        if (!captcha.current || !alive.current) return;
        verifier.current ??= new authApi.RecaptchaVerifier(auth, captcha.current, { size: 'normal' });
        const result = await authApi.signInWithPhoneNumber(auth, normalized, verifier.current);
        if (alive.current) setConfirmation(result);
      }
    } catch (cause) {
      if (alive.current) {
        setError(cause instanceof Error && cause.message === 'phone-format' ? 'Enter your phone number with country code, for example +91 followed by your number.' : phoneError(cause));
        if (!confirmation) { verifier.current?.clear(); verifier.current = null; }
      }
    } finally { if (alive.current) setBusy(false); }
  };
  return <details className="phone-signin"><summary><Phone size={17} aria-hidden="true" /> Continue with phone OTP</summary>
    <form onSubmit={submit}>
      {!confirmation ? <><label>Phone number<input type="tel" autoComplete="tel" placeholder="+91 9876543210" value={phone} onChange={event => setPhone(event.target.value)} required disabled={busy} /></label>
        <label className="conversation-access-consent"><input type="checkbox" required /><span>I agree to receive a verification SMS. Google processes this number for spam and abuse prevention. Standard SMS rates may apply.</span></label>
        <div ref={captcha} /></> : <><p role="status">Verification code sent to {phone}.</p><label>SMS verification code<input inputMode="numeric" autoComplete="one-time-code" pattern="[0-9]{6}" maxLength={6} value={code} onChange={event => setCode(event.target.value)} required /></label></>}
      <button className="conversation-access-primary" type="submit" disabled={busy || !firebaseConfigured}>{busy ? 'Please wait…' : confirmation ? 'Verify & sign in' : 'Send verification code'}</button>
      {confirmation && <button type="button" className="conversation-access-signout" disabled={busy} onClick={() => { setConfirmation(null); setCode(''); setError(''); verifier.current?.clear(); verifier.current = null; }}>Use another number</button>}
      {error && <p role="alert">{error}</p>}
    </form>
  </details>;
}