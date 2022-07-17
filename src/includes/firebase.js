import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyB1kNYq6et4moiawW3nMLYzx_Qc8yefOwI',
  authDomain: 'music-669b6.firebaseapp.com',
  projectId: 'music-669b6',
  storageBucket: 'music-669b6.appspot.com',
  messagingSenderId: '852736020734',
  appId: '1:852736020734:web:08dff2826e4a896cbfd5af',
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

db.enablePersistence().catch((error) => {
  console.log(`Firebase persistance error ${error.code}`);
});

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');
const commentsCollection = db.collection('comments');

export {
  auth,
  db,
  usersCollection,
  storage,
  songsCollection,
  commentsCollection,
};
