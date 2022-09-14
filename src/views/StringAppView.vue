<template>

     <v-container fluid>
      <v-card
       class="ma-5 mx-auto" max-width="1000">
       <v-card color="#87CEEB">
     
     <v-card-title>String Manipulation</v-card-title>
     <v-text-field label="Enter a String" v-model="vowel" @change='answer'></v-text-field>
     <span>Vowels: {{vow}}</span><br>
         <span>Number of Characters: {{coun}}</span><br>
         <span>Consonants: {{cons}}</span><br>
         <span>Vowel to *: {{vtous}}</span><br>
     </v-card>
     </v-card>
     </v-container>
     </template>
     
     <script>
     export default {
         el: '#app',
         computed: {
         answer: function() {
           var vowelList = 'aeiouAEIOU';
           this.vow = 0;
           this.coun = 0;
           this.cons = 0;
           this.vtous = "";
     
           for (var x = 0; x < this.vowel.length; x++) {
             if (vowelList.indexOf(this.vowel[x]) !== -1) {
               this.vow = this.vow + 1;
             }
           }
     
           for (var x = 0; x < this.vowel.length; x++) {
             this.coun = this.coun + 1;
           }
     
           for (var x = 0; x < this.vowel.length; x++) {
             if (vowelList.indexOf(this.vowel[x]) == -1) {
               this.cons = this.cons + 1;
             }
           }
     
           for (var x = 0; x < this.vowel.length; x++) {
             if (vowelList.indexOf(this.vowel[x]) !== -1) {
               this.vtous += "*";
             } else {
               this.vtous += this.vowel[x];
             }
           }
         }
       },
     
         data() {
             return {
                 vowel: "",
                 vow: 0,
                 coun: 0,
                 cons: 0,
                 vtous: "",
               }
           }
     }
     </script>