import firebase from "firebase/app";
//config de localstorage
import "firebase/storage";


///variables de configuración
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
    appId: process.env.REACT_APP_APP_ID
  };

//inicializando Firebase
const fire = firebase.initializeApp(config);
const storage = firebase.storage();

export {fire, firebase, storage}