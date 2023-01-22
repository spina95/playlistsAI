<template>
    <v-toolbar app color="background" text>
        <v-btn color="primary" outlined class="mr-2" >
              Today
        </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href=""
        target="_blank"
      >
        <span class="mr-2">Login</span>
      </v-btn>
      <v-btn
        flat
        href=""
        target="_blank"
      >
        <span class="mr-2">Signup</span>
      </v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        name: 'ToolBar',
    }
</script>
