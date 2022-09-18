<template>
    <v-card class="ma-5 mx-auto mx-auto text-black" max-width="600">
      <v-card-title alignment="center">Sign In to an Account</v-card-title>
      <p v-if="errMsg" style="color:red">{{errMsg}}</p>
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
    <v-btn><button @click="signin">Sign In</button></v-btn>
    <v-btn><button @click="signInWithGoogle">Sign In With Google</button></v-btn>
    </v-card>
</template>

<script setup>
    import { ref } from "vue";
    import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
    import { useRouter } from "vue-router";
    import router from "../router";
    const email = ref("");
    const password = ref("");
    const errMsg = ref();
    const auth = getAuth();
    
    const signin = () => {
    const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("Successfully Logged In!");
      console.log(auth.currentUser);
      router.push("/");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code){
        case "auth/invalid-email":
            break;
        case "auth/user-not-found":
            errMsg.value = "That email does not belong to any account.";
            break;
        default:
            errMsg.value = "Login Credentials are incorrect, Please Try Again.";
            break;
      }
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
