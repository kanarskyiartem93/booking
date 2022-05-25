import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/', component: () => import('./components/pages/Home'),
            name: 'home'
        },
        {
            path: '/hotels/:id', component: () => import('./components/pages/Hotel'),
            name: 'hotel'
        },
        {
            path: '/user/login', component: () => import('./components/pages/Login'),
            name: 'user.login'
        },

        {
            path: '/user/registration', component: () => import('./components/pages/Registration'),
            name: 'user.registration'
        },
        {
            path: '/user/personal', component: () => import('./components/pages/Personal'),
            name: 'user.personal'
        }
    ]
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x_xsrf_token')

    if (!token) {
        if (to.name === 'user.login' || to.name === 'user.registration' || to.name === 'home' || to.name === 'hotel') {
            return next()
        } else {
            return next({
                name: 'user.login'
            })
        }
    }

    if (to.name === 'user.login' || to.name === 'user.registration' || to.name === 'home' && token) {
        return next({
            name: 'user.personal'
        })
    }

    next()
})

export default router
