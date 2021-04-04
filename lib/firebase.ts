import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/auth';

const initializeFirebase  = () => {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const firebaseConfig = {
    apiKey,
    authDomain: `${projectId}.firebaseapp.com`,
    databaseURL: `https://${projectId}.firebaseio.com`,
    storageBucket: `gs://${projectId}.appspot.com`
  }; 

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

  firebase.auth().signInAnonymously();
};

export default initializeFirebase;
