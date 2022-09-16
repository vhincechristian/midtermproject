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
    apiKey: "AIzaSyCjKuj0mb0rn7UKxu3FGzwKaGAzPA1QAg4",
    authDomain: "midtermproject-720b1.firebaseapp.com",
    projectId: "midtermproject-720b1",
    storageBucket: "midtermproject-720b1.appspot.com",
    messagingSenderId: "972666361745",
    appId: "1:972666361745:web:ae1b7998edce03a00fac30"
};

initializeApp(firebaseConfig);

loadFonts()

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')