<template>
    <div style="padding: 5px;">
        <v-row>
            <div v-if="this.player != null && this.player.paused">
            <v-icon @click="play" size="30" style="color:darkgrey">mdi-play</v-icon>
            </div>
            <div v-else>
            <v-icon @click="play" size="30" style="color:darkgrey">mdi-stop</v-icon>
            </div>

            <input
                type="range"
                :min="0"
                :max="duration"
                v-model="currentTime"
                @input="updateTime"
            >
        </v-row>       
    </div>
</template>

<style>
input[type=range] {
  -webkit-appearance: none;
  margin: 1px 10px;
  width: 80%;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #464646;
  border-radius: 3px;
  border: 0px solid #000000;
}
input[type=range]::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 0px solid #2497E3;
  height: 14px;
  width: 14px;
  border-radius: 25px;
  background: darkgrey;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -5px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #2497E3;
}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 0px 0px 0px #000000;
  background: #2497E3;
  border-radius: 1px;
  border: 0px solid #000000;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497E3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #A1D0FF;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 5px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: #2497E3;
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-fill-upper {
  background: #2497E3;
  border: 0px solid #000000;
  border-radius: 2px;
  box-shadow: 0px 0px 0px #000000;
}
input[type=range]::-ms-thumb {
  margin-top: 1px;
  box-shadow: 0px 0px 0px #000000;
  border: 1px solid #2497E3;
  height: 18px;
  width: 18px;
  border-radius: 25px;
  background: #A1D0FF;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: #2497E3;
}
input[type=range]:focus::-ms-fill-upper {
  background: #2497E3;
}

</style>

<script>
    export default {
    name: 'BaseAudioPlayerTest',

    props: ['src'],

    data() {
        return {
            player: null,
            duration: 0,
            currentTime: 0,
            timeLabel: '00:00:00',
        };
    },

    methods: {
        play() {
        if (this.player.paused) {
            this.player.play();
            this.duration = this.player.duration;
        } else {
            this.player.pause();
        }
        },
        updateTime() {
        this.player.currentTime = this.currentTime;
        },
        timeupdate() {
        this.currentTime = this.player.currentTime;
        const hr = Math.floor(this.currentTime / 3600);
        const min = Math.floor((this.currentTime - (hr * 3600)) / 60);
        const sec = Math.floor(this.currentTime - (hr * 3600) - (min * 60));
        this.timeLabel = `${hr.toString()
            .padStart(2, '0')}:${min.toString()
            .padStart(2, '0')}:${sec.toString()
            .padStart(2, '0')}`;
        },
    },

    mounted() {
        this.player = new Audio(this.src);
        this.player.addEventListener('timeupdate', this.timeupdate, false);
    },
    };
</script>