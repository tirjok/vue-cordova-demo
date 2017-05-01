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
    path: '*',
    redirect: '/'
  }
]
