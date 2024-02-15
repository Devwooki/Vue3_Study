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
    const minBtn = (event) => {
      //Method Handler는 핸들링하는 트리거 DOM Event를 수신한다
      count.value -= 2;
      console.log(event);
      console.log(event.currentTarget);
    };

    const databind1 = ref("v-on과 v-bind이용");
    const change1 = (event) => {
      databind1.value = event.currentTarget.value;
    };
    const databind2 = ref("v-model을 이용한 관리");

    const checked = ref(false);
    const checked2 = ref([]);

    const seleted = ref("");

    return {
      rawHTML,
      showyou,
      vbindtest,
      changeText,
      count,
      minBtn,
      databind1,
      databind2,
      change1,
      checked,
      checked2,
      seleted,
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
    <button @click="minBtn($event)">인라인으로 이벤트 호출하기</button>
    <button @click="minBtn">메소드 방법으로 수행{{}}</button>
    <!-- 히히 재밋당-->
  </div>

  <div class="binding">
    <!-- 모델을 이용하는 것이 좀 더 편하네? 단순 텍스트 입력한해서 -->
    <!-- 새부 로직을 관리해야할 경우 조금 달라질 것 같다.-->
    <p>v-on과 v-bind : {{ databind1 }}</p>
    <input type="text" v-bind:value="databind1" @input="change1" />

    <p>v-model 이용 : {{ databind2 }}</p>
    <input v-model="databind2" />
    <!-- 역시나 한국어, 중국어 등은 잘 적용되지 않는다 -->

    <p>v-model 활용 2편 : checkbox</p>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>

    <p>v-model 활용 2편 : checkbox여러개</p>
    checkbox의 value attribute가 지정되지 않으면 on이 기본 값이다
    <span>{{ checked2 }}</span>
    <br />
    <input type="checkbox" id="a" value="ace" v-model="checked2[0]" />
    <label for="a">ace</label>
    <input type="checkbox" id="b" value="bread" v-model="checked2[1]" />
    <label for="b">bread</label>
    <input type="checkbox" id="c" value="chicken" v-model="checked2[2]" />
    <label for="c">chicken</label>
    <input type="checkbox" id="d" v-model="checked2" />
    <label for="d">default</label>

    <div class="bind_select">
      <p>v-model 활용 2편 : select</p>
      <br />
      select 사용 : {{ seleted }}
      <br />
      <select v-model="seleted">
        <option value="">선택안함</option>
        <option>ace</option>
        <option>bread</option>
        <option>chicken</option>
      </select>
    </div>
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

.binding {
  background: rgba(175, 175, 175, 0.586);
}

.bind_select {
  background-color: crimson;
  color: aliceblue;
}
</style>
