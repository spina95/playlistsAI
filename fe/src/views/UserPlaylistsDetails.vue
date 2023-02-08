<template>
    <v-container style="width: 70%">
      <v-col style="text-align: center;">
        <h2>{{ this.playlist.title }}</h2>
        <div v-if="playlist.query" style="font-style: italic;">"{{ this.playlist.query }}"</div>
        <div v-for="(track, index) in tracks" :key="track">
          <TrackCard :track="track" :index="index"/>
        </div>
        <v-progress-circular 
            indeterminate
            color="primary"
            size="50"
            class="ma-5"
            v-if="loading"
        ></v-progress-circular>
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
  import { SearchService } from '@/common/api.Search';
  import { SpotifyService } from '@/common/api.Spotify';
  import TrackCard from "@/components/TrackCard.vue"

  export default {
    name: 'UserPLaylists',
    props: [],
    components: {
      TrackCard
    },
  
    data: () => ({
      playlist: {},
      tracks: null,
      loading: true
    }),
  
    methods: {

      async loadPlaylist() {
        const uuid = this.$route.params.id;
        const data = await SearchService.getUserPlaylistByUUID(uuid)
        this.playlist = data.data[0]
        console.log(this.playlist.tracks)
        const tracks = await SpotifyService.getSpotifyTracks(this.playlist.tracks)
        this.tracks = tracks.data.data
        this.loading = false
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
  