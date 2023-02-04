import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginSpotify from "../views/LoginSpotify"
import CreatePlaylist from "../views/CreatePlaylist"
import LoginView from "../views/LoginView"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/api/sessions/oauth/spotify',
    name: 'login-spotify',
    component: LoginSpotify
  },
  {
    path: '/create-playlist',
    name: 'create-playlist',
    component: CreatePlaylist,
    props: true
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    props: true
  },
  {
    path: '/auth/auth/social/google/callback',
    name: 'google-callback',
    component: LoginView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
