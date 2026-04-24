/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import {createRouter, createWebHistory} from 'vue-router'
import Anasayfa from '../pages/Anasayfa.vue'
import LoginComponent from "@/components/LoginComponent.vue";
import GamePage from "@/pages/GamePage.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Anasayfa,
        },
        {
            path: '/login',
            component: LoginComponent,
        },
        {
            path: '/game',
            component: GamePage,
            beforeEnter: (to, from, next) => {
                if (!localStorage.getItem("username")) {
                    // LOGİN DEĞİL, GİREMEZ
                    next("/")
                } else {
                    // LOGIN GIREBİLİR
                    next();
                }
            }
        },
    ],
})

export default router
