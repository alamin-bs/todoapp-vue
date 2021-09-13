<template>
  <div id="app">
    <todo-list></todo-list>
  </div>
</template>

<script>
import store from "./store";
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  store,
  components: {
    TodoList,
  },
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
