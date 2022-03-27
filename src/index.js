import React from 'react';
import ReactDOM from 'react-dom';

require("regenerator-runtime/runtime");

import App from './App';
const title = 'React with Webpack and Babel2';

ReactDOM.render(
  <App title={title} />,

  document.getElementById('app')
);


import { initializeApp } from "firebase/app"
import { getFirestore  } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyC2zBeQVb8-AOWRHIZ_lUg5ndRhVTYXLfI",
  authDomain: "projectlibrarian.firebaseapp.com",
  projectId: "projectlibrarian",
  storageBucket: "projectlibrarian.appspot.com",
  messagingSenderId: "160762098353",
  appId: "1:160762098353:web:0c87c2e098d09e38186890"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

import { collection } from "firebase/firestore"; 

// Add a second document with a generated ID.
import { addDoc } from "firebase/firestore"; 

async function addQuote(quote, author, comment)
{
  try {
    const docRef = await addDoc(collection(db, "quote"), 
    {
      quote: quote,
      author: author,
      comment: comment,
      date: new Date().getTime()
    });
    
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
  
import { getDocs } from "firebase/firestore"; 

async function getQuote()
{
  const querySnapshot = await getDocs(collection(db, "quote"));
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
}

getQuote();
