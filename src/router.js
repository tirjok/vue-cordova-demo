import Router from 'vue-router'
import routes from 'src/routes'

export const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})
