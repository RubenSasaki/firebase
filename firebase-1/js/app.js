import { initializeApp } from "firebase-app";
import mustache from 'mustache';


const firebaseConfig = {
    apiKey: "AIzaSyCwheYZ2GdZbNGaYHlOFUZFBFk6C3fTIDo",
    authDomain: "cf-ejemplo.firebaseapp.com",
    projectId: "cf-ejemplo",
    storageBucket: "cf-ejemplo.appspot.com",
    messagingSenderId: "1088932217095",
    appId: "1:1088932217095:web:46f384a26b1871431c05a2"
  };

export const app = initializeApp(firebaseConfig);

import('./auth.js').then(function ({ login, logout, auth }){
  let navTemplate = document.querySelector("#main-header template").innerHTML;
  
  auth.onAuthStateChanged(function(user){
    let result = mustache.render(navTemplate,{ user });
    document.querySelector("#main-header").innerHTML = result;
    
    
    document.querySelector("#login")?.addEventListener("click",login);
    document.querySelector("#logout")?.addEventListener("click",logout);
  });
});