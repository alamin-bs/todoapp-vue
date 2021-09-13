<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>{{ count }}</h1>
    <button @click="incrementBy">increment</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import store from "../store";
import { mapState } from "vuex";
export default {
  name: "Test",
  store,

  methods: {
    incrementBy() {
      return this.$store.commit("incrementBy", { amount: 5 });
    },
  },
  computed: mapState(["count"]),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}
</style>
