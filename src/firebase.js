import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1P64f1OF4fiWGBCXwZk4Q--xo6tuJ9D8",
  authDomain: "test-earnig-app.firebaseapp.com",
  projectId: "test-earnig-app",
  storageBucket: "test-earnig-app.appspot.com",
  messagingSenderId: "746950750361",
  appId: "1:746950750361:web:8d12aa0aa9a5e6c8e58808"
};

const app = initializeApp(firebaseConfig);
export default app;
