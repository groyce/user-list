import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBeFfLYf-gbyBBIRc5018H27qgJw-69ggE",
    authDomain: "user-list-3d774.firebaseapp.com",
    databaseURL: "https://user-list-3d774.firebaseio.com",
    projectId: "user-list-3d774",
    storageBucket: "user-list-3d774.appspot.com",
    messagingSenderId: "822208231516",
    appId: "1:822208231516:web:1dd8ee41618219f5508e99"
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();