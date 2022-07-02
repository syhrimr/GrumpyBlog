export default [
  {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/blogs',
      name: 'Blogs',
      component: () => import('../views/BlogsView.vue')
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/state',
      name: 'State',
      component: () => import('../views/StateExampleView.vue')
    }
]