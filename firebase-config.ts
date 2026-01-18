// Bridge to use the Firebase Compat SDK
// Using the hardcoded key for the landing page as it is a public-facing static site
const firebaseConfig = {
  apiKey: "AIzaSyDldazqAxxj_4uyYQk3UdEUtdt60s0y0xs",
  authDomain: "helpful-topic-482712-p8.firebaseapp.com",
  projectId: "helpful-topic-482712-p8",
  storageBucket: "helpful-topic-482712-p8.firebasestorage.app",
  messagingSenderId: "427548918732",
  appId: "1:427548918732:web:94fe39ac8c21a65f841369"
};

// Initialize Firebase if it's available on the window object
// This check prevents multiple initializations during HMR or re-renders
if (typeof window !== 'undefined' && (window as any).firebase) {
  const firebase = (window as any).firebase;
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

// Export database and timestamp helpers
// We use getters to ensure we always have the latest instance from the window object
export const db = typeof window !== 'undefined' && (window as any).firebase 
  ? (window as any).firebase.firestore() 
  : null;

export const serverTimestamp = typeof window !== 'undefined' && (window as any).firebase 
  ? (window as any).firebase.firestore.FieldValue.serverTimestamp 
  : () => new Date();
