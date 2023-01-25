<template>
<v-col class="icon-title">
    <v-row align="center" :justify="justify">
        <v-icon size="60" class="gradient">{{ icon }}</v-icon>        
        <h2 class="subtitle gradient font-weight-bold">{{ text }}</h2>
    </v-row>
</v-col>
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
    
export default {
    name: 'IconTitle',
    props: ['icon', 'text', 'justify'],
}
</script>
  