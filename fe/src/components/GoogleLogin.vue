<script setup>

import axios from "axios";

const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the response", response)
  googleLogin(response.credential)
}

const googleLogin = async (accesstoken) => {
    axios.post('http://localhost:8000/auth/google/', {
        access_token: accesstoken
      })
        .then(resp => {
          this.user = resp.data.user
        })
        .catch(err => {
          console.log(err.response)
        })
};
</script>

<template>
  <GoogleLogin :callback="callback"/>
</template>