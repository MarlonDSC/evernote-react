import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// const firebase = require('firebase');
// require('firebase/firestore');
// const firebaseConfig = {
//   apiKey: "AIzaSyA5SHL_qEP4WYGZtoij0McDw91Ghu-y3V8",
//   authDomain: "react-app-1a999.firebaseapp.com",
//   projectId: "react-app-1a999",
//   storageBucket: "react-app-1a999.appspot.com",
//   messagingSenderId: "557948253830",
//   appId: "1:557948253830:web:889b73d1a35f03cf2a0307",
//   measurementId: "G-MPTRML3NSN"
// };
//firebase.initializeApp(firebaseConfig);

const firebaseConfig = {
  apiKey: "AIzaSyA5SHL_qEP4WYGZtoij0McDw91Ghu-y3V8",
  authDomain: "react-app-1a999.firebaseapp.com",
  projectId: "react-app-1a999",
  storageBucket: "react-app-1a999.appspot.com",
  messagingSenderId: "557948253830",
  appId: "1:557948253830:web:889b73d1a35f03cf2a0307",
  measurementId: "G-MPTRML3NSN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-cointaner')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
