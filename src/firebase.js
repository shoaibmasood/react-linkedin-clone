import firebase from  "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyD17JC7BpkNSj6JTqNUlwYW3mzkK37WbNc",
    authDomain: "linkedin-clone-77a5b.firebaseapp.com",
    projectId: "linkedin-clone-77a5b",
    storageBucket: "linkedin-clone-77ab5b.appspot.com",
    messagingSenderId: "697145203952",
    appId: "1:697145203952:web:18df191a81ed085ac17635"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db, auth};