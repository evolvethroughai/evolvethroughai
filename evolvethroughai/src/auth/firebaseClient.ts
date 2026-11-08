import type { User } from 'firebase/auth';
const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
export const firebaseConfigured = Boolean(config.apiKey && config.authDomain && config.projectId && config.appId);
async function initializeServices() {
  if (!firebaseConfigured) throw new Error('Sign-in is not connected yet. Please try again once account access is available.');
  const [apps, authApi, storeApi] = await Promise.all([import('firebase/app'), import('firebase/auth'), import('firebase/firestore/lite')]);
  const app = apps.getApps().length ? apps.getApp() : apps.initializeApp(config);
  return { auth: authApi.getAuth(app), db: storeApi.getFirestore(app), authApi, storeApi };
}
let services: ReturnType<typeof initializeServices> | undefined;
export function firebaseServices() { return services ??= initializeServices().catch(error => { services = undefined; throw error; }); }
export interface ConversationInput { id:string; kind:'learning'|'business'; topic:string; name:string; organization:string; message:string; experience:string; budget:number|null; }
export async function saveConversation(input:ConversationInput, user:User) {
  const {auth,db,storeApi}=await firebaseServices();
  if (!auth.currentUser || auth.currentUser.uid !== user.uid || !user.emailVerified || !user.email) throw new Error('Please sign in with your verified Google account before sending.');
  if (!input.message.trim() || input.message.trim().length > 3000 || input.name.trim().length < 1 || input.name.length > 100 || input.organization.length > 150 || input.topic.length > 200 || input.experience.length > 100) throw new Error('Please check the enquiry fields and try again.');
  await storeApi.setDoc(storeApi.doc(db,'conversations',input.id),{
    uid:user.uid,email:user.email,name:input.name.trim(),organization:input.organization.trim(),kind:input.kind,topic:input.topic,
    message:input.message.trim(),experience:input.experience,budget:input.budget,consent:true,status:'new',createdAt:storeApi.serverTimestamp(),
  });
}
export function accountError(error:unknown):string {
  const code=typeof error==='object'&&error!==null&&'code' in error?String(error.code):'';
  if(code==='auth/popup-closed-by-user'||code==='auth/cancelled-popup-request')return 'Sign-in was cancelled. You can try again when ready.';
  if(code==='auth/popup-blocked')return 'Your browser blocked the sign-in window. Allow pop-ups for this site and try again.';
  if(code==='auth/unauthorized-domain')return 'Sign-in is not enabled for this website address yet.';
  if(code==='permission-denied')return 'Your enquiry could not be accepted. Please check your account and try again; nothing has been confirmed as sent.';
  if(code==='auth/network-request-failed'||code==='unavailable')return 'The connection failed. Check your network and try again.';
  return 'The request could not be completed. Please try again. Your enquiry has not been confirmed as sent.';
}
