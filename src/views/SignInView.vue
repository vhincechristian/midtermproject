<template>
   <v-main>
      <v-container class="back" fill-height fluid>
        <v-row alignment="center" justify="center">
          <v-col cols="12">
            <v-dialog width="20%" v-model="alert">
              <v-card>
                <v-card-title>
                  Login
                </v-card-title>
                <v-card-text>
                  {{log}}
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" @click="alert = false" dark>Ok</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-col>
          <v-col cols="5">
            <v-card class="card-login mx-a">
              <v-card-title>Login</v-card-title>
              <v-divider></v-divider>
              <v-card-text class="pa-5">
                <v-form v-on:submit="sub" action="#" method="post">

                  <v-text-field color="green darken-1" v-model="login" label="User"></v-text-field>
                  <v-text-field color="green darken-1" v-model="senha" label="Password"></v-text-field>
                  <v-btn class="green darken-1" @click="register">Submit</v-btn>
                  <v-btn class="green darken-1" @click="signInWithGoogle">Sign In With Google</v-btn>

                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    
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