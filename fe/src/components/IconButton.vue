<template>
<v-btn :color="color" class="ma-2 white--text" @click="method">
    <v-icon right dark> {{ icon }} </v-icon>  
    {{ text }}
</v-btn>
</template>
  
<style scoped>
.icon-title {
    margin: 0 0px
}
.subtitle {
    font-size: 60px;
    text-align: start;
}
.v-icon {
    width: 8%;
}
</style>

<script>
import { useDisplay } from 'vuetify'

export default {
    name: 'IconButton',
    props: ['icon', 'text', 'color', 'method'],
}
</script>
  