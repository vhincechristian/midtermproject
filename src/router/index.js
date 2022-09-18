import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import aboutVuetifyView from '../views/aboutVuetifyView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import QuizView from '../views/QuizView.vue'
import quizapp from "../components/quizapp.vue"
import modal from "../components/modal.vue"
import HomeView from "../views/HomeView.vue"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import RegisterView from "../views/RegisterView.vue"
import SignInView from "../views/SignInView.vue"


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'aboutvuetify',
            component: aboutVuetifyView,
            meta: {
                requiresAuth: true,
            },
        },

        {
            path: '/register',
            name: 'register',
            component: RegisterView
        },

        {
            path: '/signin',
            name: 'signin',
            component: SignInView
        },

        {
            path: '/stringApp',
            name: 'StringAppView',
            component: StringAppView,
            meta: {
                requiresAuth: true,
            },
        },

        {
            path: '/basicMath',
            name: 'basicMath',
            component: BasicMathView,
            meta: {
                requiresAuth: true,
            },
        },

        {
            path: '/aboutMe',
            name: 'AboutMeView',
            component: AboutMeView,
            meta: {
                requiresAuth: true,
            },
        },

        {
            path: '/QuizView',
            name: 'QuizView',
            component: QuizView,
            meta: {
                requiresAuth: true,
            },
        },

        {
            path: '/quizapp',
            name: 'quizapp',
            component: quizapp,
            meta: {
                requiresAuth: true,
            },
        },

        {
            path: '/modal',
            name: 'modal',
            component: modal,
            meta: {
                requiresAuth: true,
            },
        },

        {
            path: '/HomeView',
            name: 'Home',
            component: HomeView,
            meta: {
                requiresAuth: true,
            },
        },

        {
            path: '/QuizHistoryView',
            name: 'QuizHistory',
            component: QuizHistoryView,
            meta: {
                requiresAuth: true,
            },
        },

    ]
})

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener();
                resolve(user);
            },
            reject
        );
    });
}


router.beforeEach(async(to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            next();
        } else {
            alert("User must be logged in first!");
            next("/register");
        }
    } else {
        next();
    }
});

export default router