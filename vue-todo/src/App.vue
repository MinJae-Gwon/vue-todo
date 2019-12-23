<template>
<div>
  <todoHeader></todoHeader>
  <todoInput></todoInput>
  <todoFooter></todoFooter>
</div>
</template>

<script>
import todoHeader from './components/todoHeader'
import todoInput from './components/todoInput'
import todoFooter from './components/todoFooter'

export default {
  components: {
    'todoHeader' : todoHeader,
    'todoInput' : todoInput,
    'todoFooter' : todoFooter
  }
}
</script>

<style>

</style>