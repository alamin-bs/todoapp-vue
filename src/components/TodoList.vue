<template>
  <div class="container">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <h1 class="todo-input"><strong>Todo List</strong></h1>
        <input
          class="form-control shadow-lg p-3  bg-white rounded input"
          type="text"
          placeholder="What's needs to be done?"
          v-model="todo"
          v-on:keyup.enter="submit"
        />

        <div v-if="todosList && todosList.length">
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(todo, index) in activeList(currentShowingCategory)"
              :key="todo.id"
            >
              <input
                type="checkbox"
                :id="todo.id"
                :value="todo.isActive"
                :checked="todo.isActive"
                @click="changingStatusOfTodo(todo, index)"
              />
              <label
                class="label"
                :class="[
                  todo.isActive && 'text-decoration-line-through deactivecolor',
                ]"
                :for="todo.id"
                ><h4>{{ todo.name }}</h4></label
              >
            </li>
            <li class="list-group-item">
              <div class="row">
                <div class="col-7">
                  <input
                    type="checkbox"
                    id="checkAll"
                    :value="checkAll"
                    :checked="checkAll"
                    v-model="checkAll"
                    @click="handleCheckAll"
                  />
                  <label class="label" for="checkAll"> Check All </label>
                </div>
                <div class="col-5 d-flex justify-content-end">
                  <p>
                    {{ totalUndoneTasks }}
                    {{ todosList.length > 1 ? "items" : "item" }} left
                  </p>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row">
                <div class="col-7 btn-group">
                  <button
                    :class="currentShowingCategory == 'all' && 'active-button'"
                    type="button"
                    v-on:click="handleAllLists"
                  >
                    All
                  </button>
                  <button
                    :class="
                      currentShowingCategory == 'undone' && 'active-button'
                    "
                    type="button"
                    v-on:click="handleActiveLists"
                  >
                    Active
                  </button>
                  <button
                    :class="currentShowingCategory == 'done' && 'active-button'"
                    type="button"
                    v-on:click="handleCompletedLists"
                  >
                    Completed
                  </button>
                </div>
                <div
                  v-if="shouldClearCompletedBeVisible"
                  class="col-5 d-flex justify-content-end"
                >
                  <button type="button" v-on:click="handleClearCompletedTasks">
                    Clear Completed
                  </button>
                </div>
              </div>
            </li>
          </ul>

          <br />
        </div>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import store from "../store";

export default {
  data: function() {
    return {
      todo: "",
      id: 0,
      currentShowingCategory: "all",
      checkAll: false,
    };
  },

  methods: {
    handleCheckAll() {
      store.commit("checkAll", { checkAll: this.checkAll });
    },
    changingStatusOfTodo(todo, index) {
      store.commit("changingStatus", { todo, index });
    },
    submit() {
      store.commit("addTodo", { id: ++this.id, todo: this.todo });
      this.todo = "";
    },
    handleAllLists() {
      this.currentShowingCategory = "all";
    },
    handleActiveLists() {
      this.currentShowingCategory = "undone";
    },
    handleCompletedLists() {
      this.currentShowingCategory = "done";
    },
    handleClearCompletedTasks() {
      store.commit("clearDoneTasks");
    },
  },

  computed: {
    shouldClearCompletedBeVisible: function() {
      return this.todosList.some((item) => item.isActive);
    },
    ...mapState(["todosList"]),
    ...mapGetters(["activeList", "totalUndoneTasks"]),
  },
};
</script>

<style scoped>
h1 {
  color: red;
}
button {
  font-size: 14px;
  margin: 0 5px;
  padding: 3px 7px;
  border: none;
  border-radius: 3px;
  text-decoration: none;
  color: inherit;
}
.active-button {
  border: 1px solid transparent !important;
  border-color: rgba(175, 47, 47, 0.2) !important;
}
.label {
  margin-left: 12px;
}
.todo-input {
  text-align: center;
  width: 100%;
  font-size: 100px;
  color: rgba(175, 47, 47, 0.15);
}
.right {
  display: inline-block;
  width: 90%;
  text-align: right;
}
.vr {
  display: flex;
  align-items: center;
}
.form-control:focus {
  box-shadow: none;
}
.input {
  border: none !important;
}
.deactivecolor {
  color: grey;
}
</style>
