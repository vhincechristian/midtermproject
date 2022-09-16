<template>
   <v-app>
    <v-main>
       <Navbar/>
       <router-view></router-view>
    </v-main>
   </v-app>
</template>

<script setup>
  import Navbar from '@/components/NavBar.vue';


   import { onMounted, ref } from "vue";
   import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
   import { useRouter } from "vue-router";
   import router from "./router";
   const isLoggedIn = ref(false);
   
   let auth;
   onMounted(() => {
     auth = getAuth();
     onAuthStateChanged(auth, (user) => {
       if (user) {
         isLoggedIn.value = true;
       } else {
         isLoggedIn.value = false;
       }
     });
   });
   
   const handleSignOut = () => {
     signOut(auth).then(() => {
       router.push("/signin");
       alert("User logged out.");
     });
   };
   </script>

<style lang="css">
   main {
      background-image: url('./assets/simple-bg.jpg');
      background-size: cover;
   }
   </style>