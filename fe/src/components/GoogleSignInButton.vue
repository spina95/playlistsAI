<script setup>
import axios from "axios";

const callback = (response) => {
    console.log("Handle the response", response)
  const credential = response.code
  axios.post('http://localhost:8000/auth/google/', {
        code: credential
      })
        .then(resp => {
          this.user = resp.data.user
        })
        .catch(err => {
          console.log(err.response)
        })
}
</script>

<template>
  <GoogleLogin :callback="callback" >
    <button>Login Using Google</button>
  </GoogleLogin>
</template>