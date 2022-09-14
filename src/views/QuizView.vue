<template>
    <v-card class="ma-5 mx-auto" max-width="544">
        <v-card color="#87CEEB">
            
          <v-card-title>Quiz App</v-card-title>
          <quizapp @quiz-completed="handleQuizCompleted" :key="quizKey" />
          <modal
            v-show="showModal"
            header="Congratulations!"
            subheader="You've completed your Quiz!"
            :score="score"
            @reload="updateQuiz"
            @close="showModal = false"
          />
        </v-card>
    </v-card>
       </template>
       
       
      <script>
      import modal from "../components/modal.vue";
      import quizapp from "../components/quizapp.vue";
       
      export default {
       components: { quizapp, modal },
       name: "App",
       data() {
         return {
           quizKey: 0,
           showModal: false,
           score: {
             allQuestions: 0,
             answeredQuestions: 0,
             correctlyAnsweredQuestions: 0,
           },
         };
       },
       methods: {
         handleQuizCompleted(score) {
           this.score = score;
           this.showModal = true;
         },
         updateQuiz() {
           this.showModal = false;
           this.quizKey++;
         },
        },
      };
       </script>