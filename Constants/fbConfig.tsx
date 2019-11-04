import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: 'AIzaSyAK5pNIHuPqOgAAEWGDc6KfgFlNlT0xCi4',
  authDomain: 'audit-bdb1d.firebaseapp.com',
  databaseURL: 'https://audit-bdb1d.firebaseio.com',
  projectId: 'audit-bdb1d',
  storageBucket: 'audit-bdb1d.appspot.com',
  messagingSenderId: '648968004319',
  appId: '1:648968004319:web:5bd2aff697e3da3cf9bf6a',
};
firebase.initializeApp(config);
// firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase