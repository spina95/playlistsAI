<template>
   <input type="text" v-model="this.input" v-on:keyup.enter="filteredList" placeholder="Search fruits..." class="text-field-style" />
   <div class="item fruit" v-for="fruit in response" :key="fruit">
     <p>{{ fruit["title"] }}</p>
     <p>{{ fruit["author"] }}</p>
     <p>{{ fruit["text"] }}</p>
   </div>
 </template>

<style>
input {
  display: block;
  width: 100%;
  height: 70px;
  margin: 20px auto;
  padding: 10px 45px;
  
  background: rgb(255, 255, 255) url("../assets/search-icon.svg") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.text-field-style {
    background-color: rgba(240, 248, 255, 0.813);
    border-radius: 30px;
    color: black;
  }

.item {
  width: 350px;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;

  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.fruit {
  background-color: rgb(97, 62, 252);
  cursor: pointer;
}

.error {
  background-color: tomato;
}
</style>

<script>
import { ref } from "vue";
import {SearchService} from "../common/api.Search"

export default {
  name: 'SearchBar',
  components: {
  },
  data: function () {
    return {
        input: ref(""), 
        fruits: ["apple", "banana", "orange"],
        response: "ciao"
    }
  },
  methods: {
    async filteredList() {
      const data = await SearchService.query(this.input)
      this.response = data.data.data
      print(this.response)
    }
  }
}
</script>