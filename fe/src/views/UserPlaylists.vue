<template>
    <v-container style="width: 70%">
      <v-col>
        <v-row>
            <v-col cols="12" sm="12" md="6" v-for="(playlist, index) in this.playlists" :key="playlist.title" >
              <v-card flat class="playlist-card" style="cursor: pointer;" v-on:click="navigateToPlaylist(index)">
                <v-col>
                  <h4>{{playlist.title}}</h4>
                  <div v-if="playlist.query" style="font-style: italic;">"{{ playlist.query }}"</div>
                  <v-row>
                    <v-btn variant="plain" prepend-icon="mdi-spotify" v-on:click="clickCreateSpotifyPlaylist(index)" class="action-button mt-8">
                      Export
                    </v-btn>
                    <v-spacer/>
                    <v-btn variant="plain" prepend-icon="mdi-delete" v-on:click="deletePlaylist(index)" class="action-button mt-8">
                      Remove
                    </v-btn>
                  </v-row>
                </v-col>
              </v-card>
            </v-col>
        </v-row>
        <h3 v-if="this.playlists.length == 0" style="text-align: center;">No playlist saved</h3>
      </v-col>
    </v-container>
</template>
  
<style scoped>

.playlist-card {
  padding: 10px;
  text-align: center;
  background-color: rgba(92, 92, 92, 0.247);
  width: 100%;
  height: auto;
  margin: 20px auto 10px auto;
  color: white;
  vertical-align: middle;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.action-button {
  background-color: transparent;
  
}
  
</style>
  
<script>
  import { mapGetters } from 'vuex'
  import { SpotifyService } from '@/common/api.Spotify';
  import { SearchService } from '@/common/api.Search';
  import { mapActions } from 'vuex'
  
  export default {
    name: 'UserPLaylists',
    props: [],
    components: {
      
    },
  
    data: () => ({
      playlists: {},
    }),
  
    methods: {
      createPlaylist() {
        SpotifyService.createPlaylist(this.title, this.description, this.playlist)
      },

      async loadPlaylist() {
        const user = this.getAuthUserId
        let data = await SearchService.getUserPlaylist(user)
        this.playlists = data.data
        console.log(this.playlists)
      },

      deletePlaylist(index) {
        SearchService.deleteUserPlaylist(this.playlists[index].id)
        console.log(this.playlists)
        this.playlists.splice(index, 1);
      },

      clickCreateSpotifyPlaylist(index) {
        this.savePlaylist(this.playlists[index].tracks)
        this.$router.push({ name: 'create-spotify-playlist' })
      },

      navigateToPlaylist(index) {
              this.$router.replace({ name: "playlist-detail", params: {id: this.playlists[index].uuid} })
            },

      ...mapActions(['savePlaylist', ]),

    },

    mounted () {
      this.loadPlaylist()
    },

    computed: {
        ...mapGetters(['getPlaylist', 'getAuthUserId'])
    }
  }
</script>
  