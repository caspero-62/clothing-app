import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAOLFSUkMbJgQpvegb4MsU7l6clQTfsyVQ",
    authDomain: "clothing-app-db-cc60f.firebaseapp.com",
    databaseURL: "https://clothing-app-db-cc60f.firebaseio.com",
    projectId: "clothing-app-db-cc60f",
    storageBucket: "clothing-app-db-cc60f.appspot.com",
    messagingSenderId: "439701928984",
    appId: "1:439701928984:web:c33741f1796675f333976d"
}; 

export const createUserProfileDocument = async (userAuth, ...additionalData) => {
   if (!userAuth) return;

   const userRef = firestore.doc(`users/${userAuth.uid}`);

   const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
         await userRef.set({
             displayName,
             email,
             createdAt,
             ...additionalData
         }) 
      } catch(error) {
            console.log('error creating user', error)
      }
    } 

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;