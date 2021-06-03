import * as firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyB5NQYoa4Bc3mAbsO4Dio1BamvJJHPn-LU",
    authDomain: "food-finder-7f430.firebaseapp.com",
    projectId: "food-finder-7f430",
    storageBucket: "food-finder-7f430.appspot.com",
    messagingSenderId: "633809953168",
    appId: "1:633809953168:web:4601a927da987f677e9315",
    measurementId: "G-YHPT9YD28Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics()

  export default firebase