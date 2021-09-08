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
        <div v-if="checkedList.length">
          <ul class="list-group">
            <li
              class="list-group-item"
              v-for="(check, index) in list"
              :key="check.id"
            >
              <input
                type="checkbox"
                :id="check.id"
                :value="check.isActive"
                :checked="check.isActive"
                v-model="list[index].isActive"
              />
              <label
                class="label"
                :class="[
                  check.isActive &&
                    'text-decoration-line-through deactivecolor',
                ]"
                :for="check.id"
                ><h4>{{ check.name }}</h4></label
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
                  />
                  <label class="label" for="checkAll"> check All </label>
                </div>
                <div class="col-5 d-flex justify-content-end">
                  <p>
                    {{ itemLeft }}
                    {{ checkedList.length > 1 ? "items" : "item" }} left
                  </p>
                </div>
              </div>
            </li>
            <li class="list-group-item">
              <div class="row">
                <div class="col-7 btn-group">
                  <button
                    :class="isShowAll && 'active-button'"
                    type="button"
                    v-on:click="handleAllLists"
                  >
                    All
                  </button>
                  <button
                    :class="isShowActive && 'active-button'"
                    type="button"
                    v-on:click="handleActiveLists"
                  >
                    Active
                  </button>
                  <button
                    :class="isShowCompleted && 'active-button'"
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
                  <button
                    :class="isShowClearCompleted && 'active-button'"
                    type="button"
                    v-on:click="handleClearCompletedTasks"
                  >
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
export default {
  data: function() {
    return {
      checkedList: [],
      todo: "",
      id: 0,
      checkAll: false,
      isShowAll: true,
      isShowActive: false,
      isShowCompleted: false,
      isShowClearCompleted: false,
    };
  },

  methods: {
    submit() {
      this.checkedList.push({
        id: ++this.id,
        name: this.todo,
        isActive: false,
      });
      this.todo = "";
    },
    handleAllLists() {
      this.isShowAll = true;
      this.isShowActive = false;
      this.isShowCompleted = false;
      this.isShowClearCompleted = false;
    },
    handleActiveLists() {
      this.isShowActive = true;
      this.isShowAll = false;
      this.isShowCompleted = false;
      this.isShowClearCompleted = false;
    },
    handleCompletedLists() {
      this.isShowCompleted = true;
      this.isShowActive = false;
      this.isShowAll = false;
      this.isShowClearCompleted = false;
    },
    handleClearCompletedTasks() {
      this.isShowClearCompleted = true;
      this.isShowCompleted = false;
      this.isShowActive = false;
      this.isShowAll = false;
      this.checkedList = this.checkedList.filter((item) => !item.isActive);
    },
  },
  watch: {
    checkAll: function() {
      if (this.checkAll) {
        for (let check of this.checkedList) {
          check.isActive = true;
        }
      } else {
        for (let check of this.checkedList) {
          check.isActive = false;
        }
      }
    },
  },
  computed: {
    itemLeft: function() {
      const itemLeftsArray = this.checkedList.filter((item) => !item.isActive);
      return itemLeftsArray.length;
    },
    list() {
      return this.checkedList.filter((item) =>
        this.isShowActive
          ? !item.isActive
          : this.isShowCompleted
          ? item.isActive
          : item
      );
    },
    shouldClearCompletedBeVisible: function() {
      return this.checkedList.some((item) => item.isActive);
    },
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
