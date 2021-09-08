<template>
  <div>
    <li class="list-group-item" v-for="check in list" :key="check.id">
      <input
        type="checkbox"
        :id="check.id"
        :value="check.isActive"
        :checked="check.isActive"
        v-model="list[check.id - 1].isActive"
      />
      <label
        :class="[check.isActive && 'text-decoration-line-through']"
        :for="check.id"
        >{{ check.name }}</label
      >
    </li>
  </div>
</template>
<script>
export default {
  name: "SingleList",
  props: ["list"],
  //   data: function() {
  //     return {
  //       checkedList: [],
  //       todo: "",
  //       id: 0,
  //       checkAll: false,
  //       isShowAll: true,
  //       isShowActive: false,
  //       isShowCompleted: false,
  //       isShowClearCompleted: false,
  //     };
  //   },

  //   methods: {
  //     submit() {
  //       this.checkedList.push({
  //         id: ++this.id,
  //         name: this.todo,
  //         isActive: false,
  //       });
  //       this.todo = "";
  //     },
  //     handleAllLists() {
  //       this.isShowAll = true;
  //       this.isShowActive = false;
  //       this.isShowCompleted = false;
  //       this.isShowClearCompleted = false;
  //     },
  //     handleActiveLists() {
  //       this.isShowActive = true;
  //       this.isShowAll = false;
  //       this.isShowCompleted = false;
  //       this.isShowClearCompleted = false;
  //     },
  //     handleCompletedLists() {
  //       this.isShowCompleted = true;
  //       this.isShowActive = false;
  //       this.isShowAll = false;
  //       this.isShowClearCompleted = false;
  //     },
  //     handleClearCompletedTasks() {
  //       this.isShowClearCompleted = true;
  //       this.isShowCompleted = false;
  //       this.isShowActive = false;
  //       this.isShowAll = false;
  //       this.checkedList = this.checkedList.filter((item) => !item.isActive);
  //       console.log("check list ss ", this.checkedList);
  //     },
  //   },
  //   watch: {
  //     checkAll: function() {
  //       if (this.checkAll) {
  //         for (let check of this.checkedList) {
  //           check.isActive = true;
  //         }
  //       } else {
  //         for (let check of this.checkedList) {
  //           check.isActive = false;
  //         }
  //       }
  //     },
  //   },
  //   computed: {
  //     itemLeft: function() {
  //       const itemLeftsArray = this.checkedList.filter((item) => !item.isActive);
  //       return itemLeftsArray.length;
  //     },
  //     list() {
  //       // if (this.isShowClearCompleted) {
  //       //   return this.checkedList.filter((item) => !item.isActive);
  //       // }
  //       //console.log("this check list ", this.checkedList);
  //       return this.checkedList.filter((item) =>
  //         this.isShowActive
  //           ? !item?.isActive
  //           : this.isShowCompleted
  //           ? item?.isActive
  //           : item
  //       );
  //     },
  //   },
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
  border: 1px solid red !important;
}
</style>
