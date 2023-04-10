<template>
    <v-container>
      <v-col>
          <v-col style="text-align: center;">
            <h3>
              {{ this.getQuery }}
            </h3>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="title"
                :counter="100"
                label="Playlist title"
                required
                filled 
                rounded 
                dense 
                single-line 
                class="input-text"
              ></v-text-field>

              <v-btn v-on:click="createPlaylist" class="width-100">
                <v-icon>mdi-spotify</v-icon>
                Export
              </v-btn>

            </v-form>
          </v-col>
      </v-col>
      <v-table class="table-songs ma-5">
        <thead>
          <tr>
            <th>
              <h3 class="header-table"></h3>
            </th>
            <th>
              <h3 class="header-table">Title</h3>
            </th>
            <th>
              <h3 class="header-table">Artists</h3>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in playlist"
            :key="item.name"
          >
            <td class="table-cell checkbox-table"><v-checkbox v-model="item.export"/></td>
            <td class="table-cell title-table">{{ item.title }}</td>
            <td class="table-cell description-table">{{ item.artists }}</td>
          </tr>
        </tbody>
      </v-table>  
    </v-container>
</template>
  
<style scoped>

.table-cell {
  vertical-align: middle;
  position: relative;
  bottom: 1px;
}
.empty-cover {
  width: 50%;
  padding-top: 20%;
  background-color: rgba(42, 42, 42, 0.356);
}

.table-songs {
  background-color: transparent;
}

.header-table {
  color: white;
}
.title-table {
  color: white;
}

.description-table {
  color: darkgrey;
}
  
</style>
  
<script>
  import { mapGetters } from 'vuex'
  import { SearchService } from '@/common/api.Search';

  export default {
    name: 'SavePlaylist',
    props: [],
    components: {
      
    },
  
    data: () => ({
      playlist: {},
      title: "",
      description: "",
      publicSwitch: false,
      headers: [
        {
          text: 'Title',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        { text: 'Artists', value: 'artists' },
      ],
    }),
  
    methods: {
      createPlaylist() {
        let tracks = []
        for (let i in this.playlist) {

          const track = { 'spotify_id': this.playlist[i].spotify_id }
          tracks.push(track)
        }

        const data = {
          'tracks': tracks,
          'title': this.title,
          'query': this.getQuery,
          'user': this.getAuthUserId
        }
        SearchService.savePlaylist(data)
        this.$router.push({ name: 'home' })
      }
    },

    mounted () {
      this.playlist = this.getPlaylist
    },

    computed: {
        ...mapGetters(['getPlaylist', 'getQuery', 'getAuthUserId'])
    }
  }
</script>
  