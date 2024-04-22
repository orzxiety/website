import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('./views/IndexView.vue')
        },
        {
            path: '/guilds',
            component: () => import('./views/DiscordLinks.vue')
        },
        {
            path: '/.well-known/matrix/server',
            component: () => import('./views/MatrixServerInfo.vue')
        },
        {
            path: '/:pathMatch(.*)',
            component: () => import ('./views/NotFoundView.vue')
        }
    ]
})

export default router