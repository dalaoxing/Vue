const routes = [{
    path: '/home',
    name: 'home',
    children: [{
        path: 'index',
        name: 'index',
        meta: {
            isJump: false
        },
        component: () =>
            import ('@/views/Home/index/index.vue')
    }, {
        path: 'classify',
        name: 'classify',
        meta: {
            isJump: false
        },
        component: () =>
            import ('@/views/Home/classify/classify.vue')
    }, {
        path: 'ranking',
        name: 'ranking',
        meta: {
            isJump: false
        },
        component: () =>
            import ('@/views/Home/ranking/ranking.vue')
    }, {
        path: 'book',
        name: 'book',
        meta: {
            isJump: true
        },
        component: () =>
            import ('@/views/Home/book/book.vue')
    }],
    component: () =>
        import ('@/views/Home/Home.vue')
}, {
    path: '/login',
    name: 'login',
    meta: {
        isJump: false
    },
    component: () =>
        import ('@/views/login/login.vue')
}, {
    path: '/details',
    name: 'details',
    meta: {
        isJump: false
    },
    component: () =>
        import ('@/views/details/details.vue')
}, {
    path: '/',
    redirect: '/home/index'
}]

export default routes;