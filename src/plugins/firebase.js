import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAHmzCMSXNafStZHsHoaejPzqxr7HuQ_EM',
  authDomain: 'auth-app-108b1.firebaseapp.com',
  databaseURL: 'https://auth-app-108b1.firebaseio.com',
  projectId: 'auth-app-108b1',
  storageBucket: 'auth-app-108b1.appspot.com',
  messagingSenderId: '1099128469858',
  appId: '1:1099128469858:web:0fdae1f2f556c3dd6a143b',
}

firebase.initializeApp(firebaseConfig)

export default firebase
