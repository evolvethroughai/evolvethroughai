# Google login and authenticated enquiries

Updated: 27 October 2026.

## Implemented locally

- Removed all curriculum download controls and local enquiry-draft downloads.
- All learning, business, header and footer conversation actions use a shared login gate.
- Google sign-in through the official Firebase Auth SDK; account state comes from Firebase, not local flags.
- Signed-in visitors can send a learning or business enquiry to the Firestore `conversations` collection.
- Success is shown only after the Firestore Lite write is acknowledged. No email notification or response-time promise is implied.
- Enquiry IDs remain stable for the lifetime of the dialog to prevent a retry creating duplicate records.
- Rules permit only verified Google users to create their own valid enquiry; client reads, updates and deletes are denied. Administrative review uses the Firebase console/IAM, not an exposed browser inbox.
- No fake sign-in fallback. Missing configuration disables Google sign-in and sending with a clear explanation.

## Firebase project setup required

1. Provide the Firebase web-app configuration from Project settings. Copy the six `VITE_FIREBASE_*` settings from `.env.example` into your local environment and fill in the public web-app values. Never use service-account credentials in the browser.
2. Enable Google in Firebase Authentication > Sign-in method and configure the support email.
3. Add the actual local and production hostnames to Authentication authorized domains. Include `localhost` and `127.0.0.1` separately if testing both addresses.
4. Create a Firestore database, choosing its location deliberately.
5. Review `firestore.rules` and apply it to the intended project. The local `firebase.json` references these rules. Do not deploy unrelated hosting or overwrite rules for an existing application without reconciling its collections.
6. Restart Vite after changing environment values.
7. Test actual Google login/cancellation/sign-out, learning and business submissions, network/permission failure, and rejected unauthenticated/cross-user access before release. Review privacy/data-retention practices and spam controls before publishing.

No Firebase project, Google provider or rules were created/deployed by this implementation. Live Google and Firestore end-to-end checks require the owner's project configuration.

## Dependency and verification

Added `firebase` (official SDK), dynamically loading Auth and Firestore Lite. Used a compatible `@grpc/grpc-js` override to resolve the high-severity transport advisory introduced through the Firebase package tree. The remaining npm audit item is the existing low-severity esbuild advisory; no unrelated tooling upgrade performed.

TypeScript and production build passed. Logged-out learning/business gates checked at 390 and 1440px in both themes. No enquiry form is exposed without authentication; Google sign-in is disabled while configuration is absent. Download actions absent, Escape closes the dialog, no horizontal overflow, scoped dialog axe scans show zero violations. This verifies the unconfigured state only, not live authentication or database authorization.

References: https://firebase.google.com/docs/auth/web/google-signin and https://firebase.google.com/docs/firestore/manage-data/add-data
