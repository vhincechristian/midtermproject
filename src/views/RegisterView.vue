<template>
   <v-card class="ma-5 mx-auto mx-auto text-black" max-width="600">
      <v-card-title alignment="center">Register an Account</v-card-title>
      <v-form>
                <v-text-field
                              outline
                              label="Username"
                              type="text"
                              placeholder="Email"
                              v-model="email"></v-text-field>
                <v-text-field
                              outline
                              hide-details
                              label="Password"
                              type="password"
                              placeholder="Password"
                              v-model="password"></v-text-field>
              </v-form>
    <v-btn><button @click="register">Submit</button></v-btn>
    <v-btn><button @click="signInWithGoogle">Sign In With Google</button></v-btn>
    </v-card>
</template>

<script setup>
    import { provide, ref } from "vue";

import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";
import router from "../router";

const email = ref("");
const password = ref("");
const auth = getAuth();
const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully registered!");
      console.log(auth.currentUser);
      router.push("/");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/");
    })
    .catch((error) => {});
};
</script>