import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginSpotify from "../views/LoginSpotify"
import CreatePlaylist from "../views/CreatePlaylist"

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
