import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'welcome',
        component: () =>  import('@/views/Welcome')
    },
    {
        path: '/form',
        name: 'applicationForm',
        component: () => import('@/views/application')
    },
    {
        path: '/ynq',
        name: 'YesOrNoQuestion',
        component: () => import('@/views/YesOrNoQuestion')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
