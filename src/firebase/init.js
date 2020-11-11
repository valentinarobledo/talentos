import firebase from 'firebase'


  const firebaseConfig = {
    apiKey: "AIzaSyBxHo23K7yh6exGvtzEHy9vBQQqDV6EcgY",
    authDomain: "talentos-3678b.firebaseapp.com",
    databaseURL: "https://talentos-3678b.firebaseio.com",
    projectId: "talentos-3678b",
    storageBucket: "talentos-3678b.appspot.com",
    messagingSenderId: "728500980841",
    appId: "1:728500980841:web:8bc5aed808867f13db66f8",
    measurementId: "G-RKL0MTPJHH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({timestampsInSnapshots: true});

  export default firebaseApp.firestore();
