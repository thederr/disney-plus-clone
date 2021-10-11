import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD5zdVgbBh7wM9neYzakdF-agpLUBohVZ4",
    authDomain: "notdisneyplus-cf0fc.firebaseapp.com",
    projectId: "notdisneyplus-cf0fc",
    storageBucket: "notdisneyplus-cf0fc.appspot.com",
    messagingSenderId: "900096100593",
    appId: "1:900096100593:web:16227872091e38549b0150",
    measurementId: "G-YK5BDN53J6"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore;
  
  //  fireaseApp.firestore was erroniously typed as such:
  //  const db = firebaseApp.firestore();
  //  that took me too long to figure out, let's not do it again 

  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;