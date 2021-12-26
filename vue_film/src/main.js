import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdRV2IYrB5T6x0CzM1XaYtScgiyzMIeW8",
  authDomain: "full-film-fey.firebaseapp.com",
  databaseURL: "https://full-film-fey-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "full-film-fey",
  storageBucket: "full-film-fey.appspot.com",
  messagingSenderId: "441712856546",
  appId: "1:441712856546:web:99ac6c6d06ca303762fdbb",
  measurementId: "G-QYCZ8VD5PS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
createApp(App).use(store).use(router).mount('#app')
