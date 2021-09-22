import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 0,
    todosList: [],
  },
  mutations: {
    addTodo(state, payload) {
      state.todosList.push({
        id: payload.id,
        name: payload.todo,
        isActive: false,
      });
    },
    changingStatus(state, payload) {
      const index = state.todosList.findIndex(
        (item) => item.id === payload.todo.id
      );
      state.todosList.splice(index, 1, {
        ...payload.todo,
        isActive: !payload.todo.isActive,
      });
    },
    clearDoneTasks(state) {
      const newArray = state.todosList.filter((item) => !item.isActive);
      state.todosList = [...newArray];
    },
    checkAll(state, payload) {
      if (!payload.checkAll) {
        for (let todo of state.todosList) {
          todo.isActive = true;
        }
      } else {
        for (let todo of state.todosList) {
          todo.isActive = false;
        }
      }
    },
  },
  getters: {
    activeList: (state) => (status) =>
      state.todosList.filter((item) =>
        status == "undone"
          ? !item.isActive
          : status == "done"
          ? item.isActive
          : item
      ),
    totalUndoneTasks: (state) => {
      const itemLeftsArray = state.todosList.filter((item) => !item.isActive);
      return itemLeftsArray.length;
    },
  },
});
export default store;
