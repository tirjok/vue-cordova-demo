// import {auth} from 'src/services'

/* const requireAuth = (to, _from, next) => {
 if (!auth.user.authenticated) {
 next({
 path: '/login',
 query: { redirect: to.fullPath }
 })
 } else {
 next()
 }
 } */

/* const afterAuth = (_to, from, next) => {
 if (auth.user.authenticated) {
 next(from.path)
 } else {
 next()
 }
 } */

export default [
  {
    path: '/',
    name: 'login',
    component: require('src/pages/auth/login')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: require('src/pages/dashboard'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/reports',
    component: require('src/pages/reports'),
    meta: {
      requiresAuth: true
    },
    children: [
      { path: '', name: 'reports-dashboard', component: require('src/pages/reports/index') }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]
