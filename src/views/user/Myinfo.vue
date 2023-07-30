<template>
  <div class="user-wrap">
    <div class="user-cont">
      <p class="tit">내 정보</p>
      <v-form action="">
        <h4>아이디</h4>
        <v-text-field outlined hide-details="auto" disabled></v-text-field>
        <h4>이름</h4>
        <v-text-field outlined hide-details="auto"></v-text-field>
        <h4>이메일</h4>
        <v-text-field outlined hide-details="auto"></v-text-field>
        <div class="d-flex">
          <v-btn class="btntxt" x-large>초기화</v-btn>
        <v-btn class="btnbg" x-large>저장</v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>
<script>
  import Footer from '../../views/layout/Footer'
  export default {
    components: {
      Footer,
    },
    data() {
      return {};
    },
  };
</script>
<style lang="scss" scoped>
</style>