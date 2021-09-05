import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";
import "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAY6yGELmDWlv5Yn-5xlAfHA_wJ25AW5w0",
    authDomain: "image-community-9d52d.firebaseapp.com",
    projectId: "image-community-9d52d",
    storageBucket: "image-community-9d52d.appspot.com",
    messagingSenderId: "759234527520",
    appId: "1:759234527520:web:d271be62029540ea49d745",
    measurementId: "G-VQGNGM4BS6"
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;
const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();
const realtime = firebase.database();
const analytics = firebase.analytics();

export{auth, apiKey, firestore, storage, realtime, analytics};