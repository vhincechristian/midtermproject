<template>
  <nav>
      <v-toolbar app>
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span>Midterm Project </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- dropdown menu -->
    <v-menu
      open-on-hover
    >
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >
          Menu
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          router
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

      <v-btn  @click="handleSignOut" v-if="isLoggedIn" color="black" dark> Log Out </v-btn>
      
      
      </v-toolbar>

     <v-navigation-drawer app v-model="drawer" >
       <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
  import { onMounted } from "vue";
  import router from "../router";

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
    
  const drawer = ref(false)

  const  items =  ref([
           { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/' },
           { title: 'Home', icon: 'mdi-information', path: '/HomeView'},
           { title: 'Calculator', icon: 'mdi-calculator-variant', path: '/basicMath' },
           { title: 'String App', icon: 'mdi-arrow-decision', path: '/stringApp'},
           { title: 'About Me', icon: 'mdi-account-box', path: '/aboutMe'},
           { title: 'Quiz App', icon: 'mdi-atom', path: '/QuizView'},
        ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 
</script>