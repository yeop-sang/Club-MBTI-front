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
        name: 'YesOrNoQuestion',
        component: () => import('@/views/YesOrNoQuestion')
    },
    {
        path: '/result/club',
        name: 'ResultClub',
        component: () => import('@/views/Introduction')
    },
    {
        path: '/result/class',
        name: 'ResultClass',
        component: () => import('@/views/ClassResult')
    },
    {
        path: '/question/club',
        name: 'QuestionClub',
        component: () => import('@/views/ClubQuestion')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
