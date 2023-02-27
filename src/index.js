import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as firebase from "firebase";
import firebase from 'firebase/app';
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLKSOy75VZ_-q__G8nU1jG5ZqTx7vd5TE",
  authDomain: "cart-a9f21.firebaseapp.com",
  projectId: "cart-a9f21",
  storageBucket: "cart-a9f21.appspot.com",
  messagingSenderId: "139933627136",
  appId: "1:139933627136:web:95a23c2d69c52723a639e5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const rootElement = document.getElementById('root');
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   rootElement
// );