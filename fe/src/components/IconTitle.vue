<template>
<v-col class="icon-title">
    <v-row align="center" :justify="justify">
        <v-icon size="5vw" class="gradient">{{ icon }}</v-icon>        
        <h2 class="subtitle gradient font-weight-bold">{{ text }}</h2>
    </v-row>
</v-col>
</template>
  
<style scoped>
.icon-title {
    margin: 0 0px
}
.subtitle {
    font-size: 4vw;
    text-align: start;
}
.v-icon {
    width: 8vw;
}
</style>

<script>
    
export default {
    name: 'IconTitle',
    props: ['icon', 'text', 'justify'],
}
</script>
  