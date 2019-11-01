<template>
  <div id="app">
    <TodoHeader></TodoHeader>  
    <TodoInput v-on:emitAddItem="addItem"></TodoInput>
    <!-- 하위 컴포넌트에서 보낸 데이터를 받음 -->
    <TodoList 
      v-bind:propsTodos="todoItems" 
      v-on:emitRemoveItem="removeItem"
      v-on:emitTodoDone="todoDone"
    ></TodoList>
    <!-- 데이타를 하위 컴포넌트로 로 내림 -->
    <TodoFooter v-on:emitClearAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
  data: function() {
    return {
      todoItems:[]
    }
  },
  methods: {
    addItem: function(todoItem) {
      const status = {done:false, item: todoItem};
      // 상태를 함께 저장하기 위해서 객체를 만듬.
      localStorage.setItem(todoItem, JSON.stringify(status));
      // 로컬스토리지에 객체로 저장되지 않기 때문에 stringify로 문자열화해서 넣어야함.
      this.todoItems.push(status);

      // 질문1: 똑같은 아이템은 로컬스토리지에 왜 기록되지 않는가? 
      // setItem은 같은키를 덮어쓴다. https://ohgyun.com/417
    },
    removeItem: function(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    clearAll: function() {
      localStorage.clear();
      this.todoItems.splice(0, this.todoItems.length);
    },
    todoDone: function(todoItem, index) {
        // todoItem.done = !todoItem.done; 
        // 안좋은 방식임. App의 데이타를 직접고치는 것이 아니라, props로 내려보낸데이터를
        // 고쳐서 다시 올리는 방식이기 때문임. 아래처럼 해야함.

        this.todoItems[index].done = !this.todoItems[index].done;
        //true면 false, false면 true
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        // 로컬스토리지의 데이터 갱신
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter,
  },
  created: function() {
    if (localStorage.length === 0) return;
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === 'loglevel:webpack-dev-server') continue;
        let itemData = JSON.parse(localStorage.getItem(localStorage.key(i)));
        // getItem으로 key값에 해당하는 값을 가져옴 그리고 parse로 객체로 만듬
        this.todoItems.push(itemData);
        // 객체데이터를 넣음.
    }
  }
}
</script>

<style>
/* reset */
* {margin:0; padding:0}
li {list-style:none}

/* common */
body {
  font-family: 'Jomolhari', serif;
  background-color: #f6f6f6;
  padding:15px;
  font-weight:normal;
}
button {
  border-style:groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0,0.2);
}

</style>
