import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1f6f0d68 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _10ff02c6 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _0e70c52a = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _830681aa = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _bb49923e = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _13a033ab = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _b571fb10 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _1f6f0d68,
    children: [{
      path: "",
      component: _10ff02c6,
      name: "home"
    }, {
      path: "/login",
      component: _0e70c52a,
      name: "login"
    }, {
      path: "/register",
      component: _0e70c52a,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _830681aa,
      name: "profile"
    }, {
      path: "/settings",
      component: _bb49923e,
      name: "settings"
    }, {
      path: "/editor",
      component: _13a033ab,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _b571fb10,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
