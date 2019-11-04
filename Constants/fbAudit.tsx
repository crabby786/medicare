import * as FirebaseModule from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAK5pNIHuPqOgAAEWGDc6KfgFlNlT0xCi4',
  authDomain: 'audit-bdb1d.firebaseapp.com',
  databaseURL: 'https://audit-bdb1d.firebaseio.com',
  projectId: 'audit-bdb1d',
  storageBucket: 'audit-bdb1d.appspot.com',
  messagingSenderId: '648968004319',
  appId: '1:648968004319:web:5bd2aff697e3da3cf9bf6a',
};
const {
  apiKey, authDomain, databaseURL, storageBucket, messagingSenderId,
} = firebaseConfig;

let firebaseInitialized = false;

if (apiKey && authDomain && databaseURL && storageBucket && messagingSenderId) {
  FirebaseModule.initializeApp({
    apiKey, authDomain, databaseURL, storageBucket, messagingSenderId,
  });

  firebaseInitialized = true;
}

export const FirebaseRef = firebaseInitialized ? FirebaseModule.database().ref() : null;
export const Firebase = firebaseInitialized ? FirebaseModule : null;
