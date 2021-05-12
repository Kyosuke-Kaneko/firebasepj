import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyDi3Rc8BuPVWi1wUJ3XaKLLN34_T5lBjXk",
      authDomain: "fir-pj-21fde.firebaseapp.com",
      projectId: "fir-pj-21fde",
      storageBucket: "fir-pj-21fde.appspot.com",
      messagingSenderId: "380848682734",
      appId: "1:380848682734:web:a269f019906ed721f6e5ff",
      measurementId: "G-6WCP5Q5H00"
    }
  )
}
  
export default firebase