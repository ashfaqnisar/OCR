import firebase from 'firebase/app';
import firebaseSecret from './firebaseSecret.json';
import 'firebase/firestore';
import 'firebase/auth';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseSecret);
}
export const db = firebase.firestore();
export default firebase;
