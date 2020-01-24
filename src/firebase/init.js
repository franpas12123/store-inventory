import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCXar2iRJjSl5CQHv0UoHC-G1Kmy8aEAIg',
  authDomain: 'store-inventory-c97df.firebaseapp.com',
  databaseURL: 'https://store-inventory-c97df.firebaseio.com',
  projectId: 'store-inventory-c97df',
  storageBucket: 'store-inventory-c97df.appspot.com',
  messagingSenderId: '259554189752',
  appId: '1:259554189752:web:1466c793d4c9af9ce96f4d'
};

export default firebase.initializeApp(firebaseConfig).firestore();
