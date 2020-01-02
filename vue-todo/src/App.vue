<template>
<div id='app'>
  <TodoHeader></TodoHeader>
  <!-- v-on: 하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드명" -->
  <TodoInput v-on:newAddItem="addOneItem"></TodoInput>
  <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
  <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
</div>
</template>

<script>
import TodoHeader from './components/TodoHeader'
import TodoInput from './components/TodoInput'
import TodoFooter from './components/TodoFooter'
import TodoList from  './components/TodoList'

export default {
  data: function() {
    return {
      todoItems: []
    } 
  },
  methods: {
    addOneItem: function(item) {
      var obj = {completed:false, item: item};
      localStorage.setItem(item, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem: function(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem: function(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems: function() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created: function() {
    if( localStorage.length > 0) {
      for(var i=0; i < localStorage.length; i++) {
        if( localStorage.key(i) !== "loglevel:webpack-dev-server"){
          /* eslint-disable no-console */
          // console.log(localStorage.key(i))
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        } 
      }
    }
  },
  components: {
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter,
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>