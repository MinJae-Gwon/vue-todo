<template>
  <footer>
      <span class="clear_btn" v-on:click="$emit('emitClearAll')">Clear All</span>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer {margin-top:30px; text-align:center}
.clear_btn {
    cursor: pointer;
    border-bottom:2px solid ;
}
</style>