import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginSpotify from '../views/LoginSpotify.vue'
import CreatePlaylist from "../views/CreatePlaylist"
import SavePlaylist from "../views/SavePlaylist"
import LoginView from "../views/LoginView.vue"
import UserPlaylists from "../views/UserPlaylists"
import UserPlaylistsDetails from "../views/UserPlaylistsDetails"
import About from "../views/About"

const routes = [
  {
    path: "/",
    redirect: "/home",
    component: HomeView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: About
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
  },
  { 
    name: 'playlist-detail', 
    path: '/playlists/:id', 
    component: UserPlaylistsDetails 
  },
]

const router = createRouter({
  base: '/',
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
