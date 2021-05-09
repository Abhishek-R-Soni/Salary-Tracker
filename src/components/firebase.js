import firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

let config = {
        apiKey: "AIzaSyDVoZnr29UE0APJi_W4C9PuszWNNg_1DXY",
        authDomain: "salary-tracker-fcef8.firebaseapp.com",
        databaseURL: "https://salary-tracker-fcef8-default-rtdb.firebaseio.com",
        projectId: "salary-tracker-fcef8",
        storageBucket: "salary-tracker-fcef8.appspot.com",
        messagingSenderId: "1023000166235",
        appId: "1:1023000166235:web:3a2eae93a63e501bd4e47e",
        measurementId: "G-THNYTE7WK2"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;