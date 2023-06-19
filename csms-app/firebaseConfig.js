import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBIRo97e28rfbbzZ3nXm-pSw0voNmpS7os",
  authDomain: "csms-app-576bc.firebaseapp.com",
  projectId: "csms-app-576bc",
  storageBucket: "csms-app-576bc.appspot.com",
  messagingSenderId: "592565572361",
  appId: "1:592565572361:web:dc5bd350722678219f39d8"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)

}


//export default firebase;
//initialize services
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth();
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }

