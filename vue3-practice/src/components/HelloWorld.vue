<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
const myValue = ref("test Text");
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
  <div class="card">
    <span>{{ myValue }}</span>
  </div>
</template>

<style scoped></style>
