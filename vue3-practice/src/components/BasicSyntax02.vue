<script>
import { ref } from "vue";

export default {
  setup() {
    const myvalue = ref("집에가자");
    return {
      myvalue,
    };
  },
};
</script>

<template>
  <div>
    {{ myvalue }}
  </div>
</template>

<style scoped></style>
