const routes = [{
    path: '/home',
    name: 'home',
    children: [{
        path: 'index',
        name: 'index',
        component: () =>
            import ('@/views/Home/index/index.vue')
    }, {
        path: 'classify',
        name: 'classify',
        component: () =>
            import ('@/views/Home/classify/classify.vue')
    }, {
        path: 'ranking',
        name: 'ranking',
        component: () =>
            import ('@/views/Home/ranking/ranking.vue')
    }, {
        path: 'book',
        name: 'book',
        component: () =>
            import ('@/views/Home/book/book.vue')
    }],
    component: () =>
        import ('@/views/Home/Home.vue')
}, {
    path: '/login',
    name: 'login',
    component: () =>
        import ('@/views/login/login.vue')
}, {
    path: '/details',
    name: 'details',
    component: () =>
        import ('@/views/details/details.vue')
}, {
    path: '/',
    redirect: '/home/index'
}]

export default routes;