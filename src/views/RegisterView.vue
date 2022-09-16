<template>
    <h1>Create An Account</h1>
    <p><input type="text" playceholder="Email" v-model="email"/></p>
    <p><input type="password" playceholder="Password" v-model="password"/></p>
    <p><button @click="register">Submit</button></p>
    <p><button @click="signInWithGoogle"></button></p>
</template>