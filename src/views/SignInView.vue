<template>
    <h1>Sign In to an Account</h1>
    <p><input type="text" playceholder="Email" v-model="email"/></p>
    <p><input type="password" playceholder="Password" v-model="password"/></p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle">Sign In With Google</button></p>
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