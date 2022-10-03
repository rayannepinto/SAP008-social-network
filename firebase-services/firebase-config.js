import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js';
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';
import '/.css/style.css';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDsVutF790zdwV46b7T9_o_D2BOE5uWPH4',
  authDomain: 'booknoteslogin.firebaseapp.com',
  projectId: 'booknoteslogin',
  storageBucket: 'booknoteslogin.appspot.com',
  messagingSenderId: '758989628486',
  appId: '1:758989628486:web:f90898b4d0d5846a405647',
};

const inputLoginEmail = document.getElementById('loginEmail');
const inputLoginPassword = document.getElementById('loginPassword');

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, "http://localhost:9099");

  const loginEmailPassword = async () => {
  const loginEmail = inputLoginEmail.value;
  const loginPassword = inputLoginPassword.value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    console.log(userCredential.user);
  }
  catch(error) {
    console.log(error);
    showLoginError(error);
  }
  
};

const btnSignUp = document.getElementById('buttonSignUp')
btnSignUp.addEventListener('click', loginEmailPassword);

