import firebase from "firebase/compat/app";
import "firebase/compat/storage";
//nuevo modulo para la autenticación
import "firebase/compat/auth"

///variables de configuración
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID,
};

//inicializando Firebase
const fire = firebase.initializeApp(config);
const storage = firebase.storage();
const auth = firebase.auth();

export { fire, firebase, storage, auth };