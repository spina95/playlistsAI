<template>
  <div v-if="!isMobile()">
    <v-card width="100%" height="100%" elevation="3" class="item track">
      <div class="d-flex flex-no-wrap justify-space-between">
        <img class="cover" :src="track['cover']"/>
        <v-col align-self="start" style="width: 50px;">
          <v-row align="center" style="height: 50px">
            <v-spacer/>
            <v-btn variant="plain" :ripple="false" :href="track['spotify_uri']" class="action-button elevation-0">
              <v-icon size="30" style="color:darkgrey">mdi-spotify</v-icon>
            </v-btn>
            <v-btn variant="plain" :ripple="false" class="action-button elevation-0">
              <v-icon @click="remove" size="30" style="color:darkgrey">mdi-minus</v-icon> 
            </v-btn>
          </v-row>
          <h2 style="height: 50%" class="track-title">{{ track["title"] }}</h2>
          <h3 style="height: 50%" class="track-subtitle">{{ track["artists"] }}</h3>
          <v-row align-content="start" align="start" style=" padding: 20px 10px">
            <audio controls style=" min-width: 100%;">
              <source :src="track['preview_url']" type="audio/mpeg">
                  Your browser does not support the audio tag.
              </audio>
            <v-spacer/>
          </v-row>
        </v-col>
      </div>
    </v-card>
  </div>


  <div v-else>
    <v-card width="100%" height="100%" elevation="3" class="item track">
      <v-col>
        <v-row style="height: 14px;">
          <v-spacer/>
          <v-icon @click="remove" size="30" style="color:darkgrey">mdi-minus</v-icon> 
        </v-row>
        <v-row>
          <img class="cover-mobile" :src="track['cover']"/>
          <v-col style="width: 10%">
            <div class="track-title text-mobile text-subtitle-2">{{ track["title"] }}</div>
            <div class="track-subtitle text-mobile text-subtitle-2">{{ track["artists"] }}</div>
          </v-col>
        </v-row>
        <v-row align="center" style="height: 50px">
          <div style="width: 90%;">
            <AudioPlayer :src="track['preview_url']"></AudioPlayer>
          </div>
          
          <v-spacer/>
              <v-icon @click="openSpotify(track['spotify_uri'])" size="30" style="color:darkgrey">mdi-spotify</v-icon> 
          </v-row>
      </v-col>
    </v-card>
  </div>

</template>
  
<style scoped>
.item {
  width: 100%;
  height: 190px;
  margin: 20px auto 10px auto;
  padding: 0px 15px 0px 15px;
  color: white;
  vertical-align: middle;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.action-button {
  background-color: transparent;
  width: 10px;
}

.track {
  background-color: rgba(92, 92, 92, 0.247);
  cursor: pointer;
}

.cover {
  align-self: center;
  height: 150px;
  width: 150px;
  border-radius: 10%;
  margin-right: 4px;
}

.cover-mobile {
  align-self: center;
  height: 50px;
  width: 50px;
  border-radius: 10%;
  margin-right: 2px;
}

.track-title {
  color: white;
  font-size: large;
  text-align: start;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
}


.track-subtitle {
  color: rgb(138, 138, 138);
  font-size: large;
  text-align: start;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
}

</style>

<script>
import AudioPlayer from './AudioPlayer.vue';

export default {
    name: "TrackCard",
    props: ["track", "index"],
    components: { AudioPlayer },
    data: () => ({
        icons: {},
        isPlaying: false,
        audio: new Audio(),
        time: 1
    }),
    methods: {
      openSpotify(link) {
        window.location.href = link
      },
      remove() {
          this.$emit("event", this.index);
      },
      isMobile() {
          if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
              return true;
          }
          else {
              return false;
          }
      },
      playSound (sound) {
        if(sound) {
          if(this.isPlaying == false){
            this.audio = new Audio(sound);
            this.audio.addEventListener("timeupdate", () => {
              let time = this.currentTime;
              this.time = time;
              console.log(time);
            });
            this.audio.play();
            this.isPlaying = true
          } else {
            this.audio.pause()
            this.isPlaying = false
          }
      }
    }
    },
}
</script>
  