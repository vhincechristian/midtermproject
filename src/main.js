import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnIaw98-nUOupa5UJpXbxhcuCPvxuPTPw",
    authDomain: "finalproject-13e27.firebaseapp.com",
    projectId: "finalproject-13e27",
    storageBucket: "finalproject-13e27.appspot.com",
    messagingSenderId: "781605468756",
    appId: "1:781605468756:web:65c4e9385b61f207aa8bc1"
};

initializeApp(firebaseConfig);

loadFonts()

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')