// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field

const firebaseConfig = {
  apiKey: "AIzaSyDVXO0vN3vBa0mH2WoWfazmitgoqwP62X0",
  authDomain: "task-lister-auth-82a33.firebaseapp.com",
  projectId: "task-lister-auth-82a33",
  storageBucket: "task-lister-auth-82a33.appspot.com",
  messagingSenderId: "677750454813",
  appId: "1:677750454813:web:4c2260b7665dfee8ff64f4",
  measurementId: "G-X7SHFNKPSW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();
