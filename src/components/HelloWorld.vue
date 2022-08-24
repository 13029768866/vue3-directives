<script setup>
import { ref } from 'vue';
let color = ref('red')
</script>

<template>
  <div>
    <div>v-foucs</div>
    <input v-focus type="text">
  </div>
  <div>
    <div>v-color</div>
    <div v-color="color">color</div>
  </div>
  <div>
    <div>v-draggable</div>
    <div v-draggable class="draggable-wrapper">
  </div>

  </div>
</template>

<style scoped>
.draggable-wrapper{
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>
