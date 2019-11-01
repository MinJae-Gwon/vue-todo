<template>
  <div class="todo_list">
        <transition-group name="list" tag="ul">
            <li 
                v-for="(todoItem, index) in propsTodos" 
                v-bind:key="todoItem.item"
                v-bind:class="{done:todoItem.done}"
            >
                <span class="checkbox" v-on:click="$emit('emitTodoDone',todoItem, index)"><i class="fas fa-check"></i></span>
                <span class="text">{{todoItem.item}}</span>
                <span class="remove_btn" v-on:click="$emit('emitRemoveItem', todoItem, index)"><i class="far fa-trash-alt"></i></span>
            </li>
        </transition-group>
  </div>
</template>

<script>
export default {
    props: ['propsTodos'],
}
</script>

<style scoped>
.todo_list {margin-top:20px}
li + li {
    margin-top:10px;
}
li {
    padding:20px 30px 20px 20px;
    font-size:18px;
    border-bottom:1px dotted rgb(192, 192, 192);
    position:relative;
    color:black;
}
li > .checkbox {margin-right:10px; color:#e4e4e4}
li > .text {color:black;}
li.done > .checkbox {color:coral}
li.done > .text {text-decoration-line: line-through; color:#e4e4e4}
li .remove_btn {
    position: absolute;
    right:30px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>