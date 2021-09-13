
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//let id = 0;
export default new Vuex.Store({
    state: {
        count: 0,
        todosList:[]
    },
    mutations: {
        
        addTodo(state,payload){
            state.todosList.push({
                id: payload.id,
                name: payload.todo,
                isActive: false,
              });
        },
        changingStatus(state,payload){
            const index = state.todosList.findIndex(item => item.id === payload.todo.id);
            state.todosList.splice(index,1,{...payload.todo, isActive: !payload.todo.isActive});
            
        },
        clearDoneTasks(state){
           const newArray =  state.todosList.filter((item) => !item.isActive);
           state.todosList = [...newArray]
        }
    },
    getters:{
        activeList: state => status=>  state.todosList.filter((item) =>
        status == 'undone'
          ? !item.isActive
          : status == 'done'
          ? item.isActive
          : item
      ),
      totalUndoneTasks: state => {
        const itemLeftsArray = state.todosList.filter((item) => !item.isActive);
        return itemLeftsArray.length;
      }
    }
});
