import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCN4i_Ly-i_2FjJY_srNtKekKyKTx2lvKU",
  authDomain: "crwn-db-9b2bc.firebaseapp.com",
  databaseURL: "https://crwn-db-9b2bc.firebaseio.com",
  projectId: "crwn-db-9b2bc",
  storageBucket: "crwn-db-9b2bc.appspot.com",
  messagingSenderId: "18005202982",
  appId: "1:18005202982:web:42f64aad7cd2cb6dc72ee7",
  measurementId: "G-2MPZZHECDX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
