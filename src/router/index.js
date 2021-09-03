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
        name: 'QuestionClass',
        component: () => import('@/views/Question')
    },
    {
        path: '/result/club',
        name: 'ResultClub',
        component: () => import('@/views/ClubResult')
    },
    {
        path: '/result/class',
        name: 'ResultClass',
        component: () => import('@/views/ClassResult')
    },
    {
        path: '/question/club',
        name: 'QuestionClub',
        component: () => import('@/views/Question')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => {router.push('/')}
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
