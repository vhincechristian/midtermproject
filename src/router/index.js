import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import aboutVuetifyView from '../views/aboutVuetifyView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import QuizView from '../views/QuizView.vue'
import quizapp from "../components/quizapp.vue"
import modal from "../components/modal.vue"
import AboutAppsView from "../views/AboutAppsView.vue"


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'aboutvuetify',
            component: aboutVuetifyView
        },

        {
            path: '/stringApp',
            name: 'StringAppView',
            component: StringAppView
        },

        {
            path: '/basicMath',
            name: 'basicMath',
            component: BasicMathView
        },

        {
            path: '/aboutMe',
            name: 'AboutMeView',
            component: AboutMeView
        },

        {
            path: '/QuizView',
            name: 'QuizView',
            component: QuizView
        },

        {
            path: '/quizapp',
            name: 'quizapp',
            component: quizapp
        },

        {
            path: '/modal',
            name: 'modal',
            component: modal
        },

        {
            path: '/AboutAppsView',
            name: 'AboutApps',
            component: AboutAppsView
        },

    ]
})

export default router