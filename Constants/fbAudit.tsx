// import * as FirebaseModule from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAK5pNIHuPqOgAAEWGDc6KfgFlNlT0xCi4',
  authDomain: 'audit-bdb1d.firebaseapp.com',
  databaseURL: 'https://audit-bdb1d.firebaseio.com',
  projectId: 'audit-bdb1d',
  storageBucket: 'audit-bdb1d.appspot.com',
  messagingSenderId: '648968004319',
  appId: '1:648968004319:web:5bd2aff697e3da3cf9bf6a',
};
// let firebaseInitialized = true;
// FirebaseModule.initializeApp(firebaseConfig);

// export const FirebaseRef = firebaseInitialized ? database().ref() : null;
// // export const Firebase = firebaseInitialized ? FirebaseModule : null;
// export const db = firebaseInitialized ? firestore() : null;
// //var db = firebase.firestore();