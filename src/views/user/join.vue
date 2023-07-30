<template>
  <div class="user-wrap">
    <div class="user-cont">
      <p class="tit">회원 가입</p>
      <v-form action="">
        <h4>아이디</h4>
        <v-text-field outlined hide-details="auto"></v-text-field>
        <h4>비밀번호</h4>
        <v-text-field outlined type="password" hide-details="auto"></v-text-field>
        <h4>비밀번호 확인</h4>
        <v-text-field outlined type="password" hide-details="auto" disabled></v-text-field>
        <!--새 비밀번호 필드 입력전 disabled-->
        <h4>이름</h4>
        <v-text-field outlined hide-details="auto"></v-text-field>
        <h4>주민등록번호</h4>
        <v-text-field outlined hide-details="auto"></v-text-field>
        <div class="join-chk">
          <div class="d-flex">
            <v-checkbox :ripple="false" color="#2C2228" label="이용 약관에 동의합니다." :value="checked"></v-checkbox>
            <span text @click.stop="dialog = true">이용약관 보기</span>
          </div>
          <div class="d-flex">
            <v-checkbox :ripple="false" color="#2C2228" label="(선택) 마케팅 정보 활용에 동의합니다."></v-checkbox>
            <span text @click.stop="dialog = true">이용약관 보기</span>
          </div>
          <v-dialog :value="dialog" @input="dialog = $event" max-width="500px">
            <v-card class="pri-modal">
             <div class="pri-tit d-flex">
            <h4 class="text-h2">이용약관</h4>
            <v-btn @click="dialog = false" :ripple="false"><img src="@/assets/images/common/icon-x.svg" alt=""></v-btn>
          </div>
          <p>이용약관내용입니다.</p>
            </v-card>
          </v-dialog>
        </div>
        <v-btn class="btnbg" x-large block>가입하기</v-btn>
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
      return {
        dialog: false,
      };
    },
  };
</script>
<style lang="scss" scoped>
</style>