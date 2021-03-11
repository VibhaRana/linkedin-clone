import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDlkWdC-EoTS_6StyN2MvwuKrj22DNEXVI",
    authDomain: "linkedin-clone-300e7.firebaseapp.com",
    projectId: "linkedin-clone-300e7",
    storageBucket: "linkedin-clone-300e7.appspot.com",
    messagingSenderId: "716981735510",
    appId: "1:716981735510:web:e8930ded677894b6202bf7"
  };

  // This line connects to the database
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  //Get db. Go to the app we just initialized and get firestore
  const db = firebaseApp.firestore()

  //Get access to authentication
  const auth = firebase.auth()

  export {db, auth}