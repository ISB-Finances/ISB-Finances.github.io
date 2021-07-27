import firebase from "firebase/app";
import 'firebase/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDTeR71ClrEP4Ow6TnaL5evniqhAIKZ6sg",
    authDomain: "isbauth-development.firebaseapp.com",
    projectId: "isbauth-development",
    storageBucket: "isbauth-development.appspot.com",
    messagingSenderId: "521289558389",
    appId: "1:521289558389:web:18cd0e7e75635f0102cb3c"
})

export const auth = app.auth()
export default app