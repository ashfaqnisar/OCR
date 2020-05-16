import firebase from 'firebase';
import firebaseSecret from './firebaseSecret.json';

firebase.initializeApp(firebaseSecret);

export const db = firebase.firestore();
export default firebase;
