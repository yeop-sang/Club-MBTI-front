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
        path: '/question/class',
        name: 'ClassQuestion',
        component: () => import('@/views/ClassQuestion'),
        props: true
    },
    {
        path: '/question/club',
        name: 'ClubQuestion',
        component: () => import('@/views/ClubQuestion'),
        props: true
    },
    {
        path: '/intro',
        name: 'intro',
        component: () => import('@/views/Introduction')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
