<template>
  <div class="todo_input">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="add_btn" v-on:click="addTodo"><i class="fas fa-plus"></i></span>
      <Modal v-if="showModal">
        <!-- slot="header"를 가지면 <slot name="header">에 정의된 부분에 컨텐츠를 상위에서 재정의 할 수 있게 된다. -->
        <h3 slot="header">경고!</h3>
        <div slot="body">아무것도 입력하지 않았습니다.</div>
        <ul  slot="body"> 
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
        </ul>
        <div slot="footer">copyright</div>
        <i slot="footer" class="fas fa-times" v-on:click="showModal=false"></i>
        <!-- <slot name="body"></slot>에 div, ul이 들어가게 재정의 되었다. -->
      </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
    data: function () {
        return {
            newTodoItem: '',
            showModal: false
        }
    },
    methods: {
        addTodo: function(){
            if (this.newTodoItem) { //this가 TodoInput.vue 
                this.$emit('emitAddItem', this.newTodoItem);
                this.clearInput(); // 컴포넌트의 인스턴스를 가르킴.
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput: function(){
            this.newTodoItem = '';
        }
    },
    components: {
        Modal: Modal
    }
}
</script>

<style scoped>
.todo_input {
    text-align: center;
    background-color:white;
    border-radius: 10px;
    padding:10px;
    box-shadow: 0 0 10px rgba(195, 195, 195, 0.2);
}
input {
    width:80%;
    padding:10px 10px;
    border:none;
    font-size: 24px;
}
.add_btn > i {
    font-size:24px;
}
input:focus {
    outline: none;
}
.fa-times {
    position:absolute; 
    right:20px; top:20px;
    cursor: pointer;
}
</style>