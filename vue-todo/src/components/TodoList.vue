<template>
  <div>
    <ul>
      <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem" class="shadow">
        <i class="checkBtn fas fa-check" v-on:click="toggleComplete"></i>
        {{todoItem}}
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: []
    } 
  },
  methods: {
    removeTodo: function(todoItem, index) {
      /* eslint-disable no-console */
      console.log(todoItem, index)
      localStorage.removeItem(todoItem)
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function() {
      
    }
  },
  created: function() {
    if( localStorage.length > 0) {
      for(var i=0; i < localStorage.length; i++) {
        if( localStorage.key(i) !== "loglevel:webpack-dev-server"){
          this.todoItems.push(localStorage.key(i))
        } 
      }
    }
  }
}
</script>

<style>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #0984e3;
}
</style>