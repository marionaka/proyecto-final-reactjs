import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg8LcP8_yWZ71DmCBrChn5QtYtICiNn50",
  authDomain: "react-js-9002a.firebaseapp.com",
  projectId: "react-js-9002a",
  storageBucket: "react-js-9002a.appspot.com",
  messagingSenderId: "435042051455",
  appId: "1:435042051455:web:c5a5a680a0335b21b7664a"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);