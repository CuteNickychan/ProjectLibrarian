import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import runtime from "regenerator-runtime/runtime";

import App from './App.js'

import { initializeApp } from "firebase/app"
import { getFirestore  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2zBeQVb8-AOWRHIZ_lUg5ndRhVTYXLfI",
  authDomain: "projectlibrarian.firebaseapp.com",
  projectId: "projectlibrarian",
  storageBucket: "projectlibrarian.appspot.com",
  messagingSenderId: "160762098353",
  appId: "1:160762098353:web:0c87c2e098d09e38186890"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
window.db = getFirestore(firebaseApp);


ReactDOM.render(

  <App/>,
  document.getElementById('app')
);