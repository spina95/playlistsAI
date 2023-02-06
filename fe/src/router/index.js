import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginSpotify from '../views/LoginSpotify.vue'
import CreatePlaylist from "../views/CreatePlaylist"
import SavePlaylist from "../views/SavePlaylist"
import LoginView from "../views/LoginView.vue"
import UserPlaylists from "../views/UserPlaylists"

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
    path: '/save-playlist',
    name: 'save-playlist',
    component: SavePlaylist,
    props: true
  },
  {
    path: '/create-spotify-playlist',
    name: 'create-spotify-playlist',
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
    path: '/playlists',
    name: 'playlists',
    component: UserPlaylists,
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
