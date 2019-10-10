import Vue from 'vue'
import Router from 'vue-router'
import routes from './router.config';

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass: 'ave',
    routes
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(it => it.meta.isJump)) {
        console.log(to);

        if (!window.localStorage.user) {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        } else {
            next();
        }
    } else {
        next();
    }

})

export default router;