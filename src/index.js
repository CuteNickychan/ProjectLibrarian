/*
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';

const firebaseApp = initializeApp(
    {
    apiKey: "AIzaSyC2zBeQVb8-AOWRHIZ_lUg5ndRhVTYXLfI",
    authDomain: "projectlibrarian.firebaseapp.com",
    projectId: "projectlibrarian",
    storageBucket: "projectlibrarian.appspot.com",
    messagingSenderId: "160762098353",
    appId: "1:160762098353:web:0c87c2e098d09e38186890"
    }
  );
const db = getFirestore(firebaseApp);

async function loadCity(name) {
    const cityDoc = doc(db, `cities/${name}`);
    const snapshot = await getDoc(cityDoc);
    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  }
*/
console.log("Test!");