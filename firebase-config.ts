import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDldazqAxxj_4uyYQk3UdEUtdt60s0y0xs",
  authDomain: "helpful-topic-482712-p8.firebaseapp.com",
  projectId: "helpful-topic-482712-p8",
  storageBucket: "helpful-topic-482712-p8.firebasestorage.app",
  messagingSenderId: "427548918732",
  appId: "1:427548918732:web:94fe39ac8c21a65f841369"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export modular Firestore instance and serverTimestamp helper
export const db = getFirestore(app);
export { serverTimestamp };
