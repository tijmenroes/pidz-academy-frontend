import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: '',
      component: () => import(/* webpackChunkName: "Interests" */ '../views/Interests.vue')
    },
  {
    path: '/home',
    name: 'Overview',
    component: () => import(/* webpackChunkName: "Overview" */ '../views/Overview.vue')
  },
  {
    path: '/online-cursussen',
    name: 'OnlineCoursesOverview',
    component: () => import(/* webpackChunkName: "OnlineCoursesOverview" */ '../views/OnlineCoursesOverview.vue')
  },
  {
    path: '/in-person-cursussen',
    name: 'InPersonCoursesOverview',
    component: () => import(/* webpackChunkName: "InPersonCoursesOverview" */ '../views/InPersonCoursesOverview.vue')
  },
  {
    path: '/artikelen',
    name: 'Articles',
    component: () => import(/* webpackChunkName: "Articles" */ '../views/Articles.vue')
  },
  {
    path: '/artikelen/:id',
    name: 'ViewArticle',
    component: () => import(/* webpackChunkName: "ViewArticle" */ '../views/ViewArticle.vue')
  },
  {
    path: '/courses/:id',
    name: 'ViewCourse',
    component: () => import(/* webpackChunkName: "ViewCourse" */ '../views/ViewCourse.vue')
  },
  {
    path: '/search/',
    name: 'Search',
    component: () => import(/* webpackChunkName: "Search" */ '../views/Search.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
