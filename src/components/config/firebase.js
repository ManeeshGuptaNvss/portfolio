import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBC1Yw5wPQGAobXVKtlP2db93I_KPdWRWE",
    authDomain: "portfolio-35d90.firebaseapp.com",
    databaseURL: "https://portfolio-35d90.firebaseio.com",
    projectId: "portfolio-35d90",
    storageBucket: "portfolio-35d90.appspot.com",
    messagingSenderId: "290153945747",
    appId: "1:290153945747:web:a19b13ea1e97d534ab4b66",
    measurementId: "G-FWYDSQ4L5T"
}
firebase.initializeApp(firebaseConfig);
export default{
    firestore: firebase.firestore()
};
