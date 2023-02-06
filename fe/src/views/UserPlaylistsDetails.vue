<template>
    <v-container style="width: 70%">
      <v-col>
        <v-row>
            <v-col cols="12" sm="12" md="6" v-for="playlist in this.playlists" :key="playlist.title" >
              <v-card flat class="playlist-card" style="cursor: pointer;  ">
                <v-col>
                  <h4>{{playlist.title}}</h4>
                  <div v-if="playlist.query" style="font-style: italic;">"{{ playlist.query }}"</div>
                  <v-row>
                    <v-btn class="export-button icon-button mt-8">
                      <v-icon right dark> mdi-spotify </v-icon>  
                      Export
                    </v-btn>
                    <v-spacer/>
                    <v-btn class="remove-button icon-button mt-8">
                      <v-icon right dark> mdi-delete </v-icon>  
                      Remove
                    </v-btn>
                  </v-row>
                </v-col>
              </v-card>
            </v-col>
        </v-row>
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

.remove-button {
  background-color: darkred;
}
  
</style>
  
<script>
  import { mapGetters } from 'vuex'
  import { SpotifyService } from '@/common/api.Spotify';
  import { SearchService } from '@/common/api.Search';

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
        data = this.getPlaylist()
        this.playlists = await SpotifyService.getSpotifyTracks(data)
      }
    },

    mounted () {
      this.loadPlaylist()
    },

    computed: {
        ...mapGetters(['getPlaylist', 'getAuthUserId'])
    }
  }
</script>
  