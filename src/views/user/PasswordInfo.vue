<template>
  <div class="user-wrap">
    <div class="user-cont">
      <p class="tit">비밀번호 변경</p>
      <v-form action="">
        <h4>현재 비밀번호</h4>
        <v-text-field outlined type="password" hide-details="auto"></v-text-field>
        <h4>새 비밀번호</h4>
        <v-text-field outlined type="password" hide-details="auto"></v-text-field>
        <h4>비밀번호 확인</h4>
        <v-text-field outlined type="password" hide-details="auto" disabled></v-text-field>
        <!--새 비밀번호 필드 입력전 disabled-->
        <v-btn class="btnbg" x-large block>저장</v-btn>
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