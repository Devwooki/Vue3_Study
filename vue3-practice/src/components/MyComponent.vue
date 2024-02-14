<script>
import { ref } from "vue";

export default {
  setup() {
    const rawHTML = ref(`<span style="color: red">이것은 빨간색이어야 합니다.</span>`);
    const showyou = () => {
      alert("널 보여다오!!");
    };

    const vbindtest = ref(false, "txt");
    const changeText = () => {
      vbindtest.value = !vbindtest.value;
    };

    //console.log(rawHTML); //ref 객체를 출력
    //console.log(rawHTML.value); //ref 객체의 값을 출력

    const count = ref(0);
    const minBtn = () => {
      count.value -= 2;
    };

    return {
      rawHTML,
      showyou,
      vbindtest,
      changeText,
      count,
      minBtn,
    };
  },
};
</script>

<template>
  <div class="bgc">
    <p>텍스트 보간법 사용 : {{ rawHTML }}</p>
    <p>v-html 디렉티브 사용 <span v-html="rawHTML"></span></p>
    <button @click="showyou">이거 눌러볼래?</button>
    <!-- @click과 v-on:click은 동일하다 -->
  </div>

  <div class="vbind">
    <p>버튼을 클릭하면 값들이 바뀐다.</p>

    <button @click="changeText">{{ vbindtest ? "b" : "a" }}</button>
    <!-- v-bind:value와 :value는 동일하다 -->
  </div>

  <div class="event">
    {{ count }}
    <button @click="count++">인라인으로 수행{{}}</button>
    <button @click="minBtn">메소드 방법으로 수행{{}}</button>
    <!-- 히히 재밋당-->
  </div>
</template>

<style scoped>
.bgc {
  background-color: rgb(255, 255, 205);
}

.vbind {
  background-color: rgba(151, 187, 252, 0.586);
}
.event {
  background-color: rgba(252, 151, 230, 0.586);
}
</style>
