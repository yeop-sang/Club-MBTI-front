<template>
  <div style="flex-direction: column">
    <h2>BlackSaint 지원서</h2>
    <input v-model="name"/>
    <div class="search_box">
      <input type="text" v-model="major"/>
      <ul class="search_list">
        <li :key="i" v-for="(major, i) in majorList">{{ major }}</li>
      </ul>
    </div>
    <div>
      <p>
        김상엽!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "application",
  data() {
    return {
      name: "홍길동",
      studentID: "20210000",
      major: "컴퓨터학부",
      majorList: [],
      sex: "male",
      age: "20",
      phoneNumber: "01000000000"
    }
  },
  methods: {
    async getMajorList() {
    }
  },
}
</script>

<style scoped>
.hide {
  display: none !important; /* 사용자가 아무것도 입력하지 않았을 때 검색창을 숨기는 용도*/
}

.rel_search {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid red;
  border-radius: 12px;

}

.pop_rel_keywords {
  list-style: none;
  margin-right: 30%;

}

.pop_rel_keywords { /* JS에서 동적으로 li를 생성할 때 적용될 스타일*/
  line-height: 250%
}

.search_list {
  background: #fff;
  box-shadow: 0 9px 8px -3px rgb(64 60 67 / 24%), 8px 0 8px -7px rgb(64 60 67 / 24%), -8px 0 8px -7px rgb(64 60 67 / 24%);
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0 0 24px 24px;
  padding-bottom: 4px;
  overflow: hidden;
}

.search_box {
  display: flex;
  flex-direction: column;
  height: 44px;
  margin-top: 0px;
  z-index: 3;
  box-shadow: 0px 2px 5px 0px rgb(60 64 67 / 16%);
  border-radius: 25px;
  /* background: #fff; */
  background: #fff;
}
</style>
