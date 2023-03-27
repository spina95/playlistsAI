<template>
<v-container>
  <v-col class="d-flex flex-column justify-content-center">
    <v-form v-model="valid" @submit.prevent="login">
      <v-card>
        <v-card-text>
          <v-text-field
                  label="Email"
                  v-model="email"
                  :rules="[ 
                    v => !!v || 'Email is required', 
                    v => /.+@.+/.test(v) || 'E-mail must be valid' 
                  ]"
                  required
          ></v-text-field>
          <v-text-field
                  label="Password"
                  v-model="password"
                  type="password"
                  :rules="[v => !!v || 'Password is required']"
                  required
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
            <v-btn type="submit" :disabled="!valid">
              Login
            </v-btn>
        </v-card-actions>
        <div v-if="error"> {{ this.error }}</div>
      </v-card>
    </v-form>
    <v-btn @click="googleLogin">
              Login google
            </v-btn>
    <GoogleSignInButton/>
  </v-col>
</v-container>
</template>

<style scoped>

</style>

<script>
import {SearchService} from "../common/api.Search"
import { mapActions} from 'vuex'
import GoogleSignInButton from "@/components/GoogleSignInButton.vue"

export default {
  name: 'LoginView',
  props: [],
  components: {
    GoogleSignInButton
  },
  data: () => ({
    valid: true,
    email: '',
    password: '',
    emailRules: [ 
      v => !!v || 'Email is required', 
      v => /.+@.+/.test(v) || 'E-mail must be valid' 
    ],
    error: "error"
  }),
  methods: {

     async login() {
      SearchService.login(this.email, this.password)
      .then((data) => {
        const token = data.data.key
        this.continueAuth(token)
      })
      .catch(() => {
        this.error = "Account not found"
      })
    },

     callback(response) {
      console.log("Handle the response", response)
    },

    ...mapActions(['continueAuth', 'googleLogin']),

  },
}
</script>