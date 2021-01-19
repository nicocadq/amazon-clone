import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBIrYru_jV91qAXKS9ZeOLbiZWME7uvLJ0",
  authDomain: "clone-9d2e0.firebaseapp.com",
  databaseURL: "https://clone-9d2e0.firebaseio.com",
  projectId: "clone-9d2e0",
  storageBucket: "clone-9d2e0.appspot.com",
  messagingSenderId: "38536075548",
  appId: "1:38536075548:web:9e44265d232d8741ea82d9",
});

const auth = firebase.auth();

export { auth };
