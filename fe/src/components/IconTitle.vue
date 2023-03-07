<template>
<v-col class="icon-title">
    <v-row align="center" :justify="justify">
        <v-icon :size="xs ? 40 : 60"  class="gradient">{{ icon }}</v-icon>        
        <h2 class="subtitle gradient font-weight-bold text-h4 text-sm-h3">{{ text }}</h2>
    </v-row>
</v-col>
</template>
  
<style scoped>
.icon-title {
    margin: 0 0px
}
.subtitle {
    text-align: start;
}
.v-icon {
    width: 8%;
}
</style>

<script>
import { useDisplay } from 'vuetify'

export default {
    name: 'IconTitle',
    
    props: ['icon', 'text', 'justify'],
    setup () {
    const { xs, smAndDown } = useDisplay()
        return { xs, smAndDown }
    },
}
</script>
  