<template>
  <div class="login-wrap">
    <div class="login-cont">
            <div class="loginform">
                <div class="d-flex">
                    <p class="loginlogo"><img src="@/assets/images/icalllogo.svg" alt=""></p>
                    <form action="">
                        <v-text-field placeholder="아이디" outlined 
                            :rules="[rules.inputUserId.required, rules.inputUserId.length, rules.inputUserId.charValid]"></v-text-field>
                        <v-text-field placeholder="비밀번호" outlined type="password"
                            :rules="[rules.inputUserPassword.required, rules.inputUserPassword.length, rules.inputUserPassword.charValid]"></v-text-field>
                        <v-btn class="btnbg" x-large block>로그인</v-btn>
                        <div class="d-flex">
                            <router-link to="/">회원 가입</router-link>
                            <router-link to="/">아이디 / 비밀번호 찾기</router-link>
                        </div>
                    </form>
                </div>
        </div>
        <div class="login-ft" v-if="$vuetify.breakpoint.xs">
            <p>㈜아이콜모바일(선유도지점) 사업자번호 : 226-23-91761 | 통신판매신고 : 2023-서울당산-605호 | 대표이사 : 박준성, 서울특별시 영등포구 양평동5가 양평로22길 21,
                선유도코오롱디지털타워 605호</p>
        </div>
    </div>
  </div>    
</template>
<script>

export default {
    components: {
    },
    data() {
        return {
            id: null,
            rules: {
                inputUserId: {
                    required: value => !!value || 'ID를 입력하세요.',
                    length: value => !(value && value.length > 20) || 'ID는 20자 이상 입력할 수 없습니다.',
                    charValid: value => /^[a-zA-Z0-9]*$/.test(value) || '영문 및 숫자만 입력 가능합니다.'
                },
                inputUserPassword: {
                    required: value => !!value || '비밀번호를 입력하세요.',
                    length: value => !(value && value.length > 20) || '비밀번호는 20자 이상 입력할 수 없습니다.',
                    charValid: value => !(/[\{\}\[\]\/?.,;:|\)~`\_<>\&\\(\'\"]/g.test(value)) || '입력할 수 없는 문자열입니다. (가능문자 : !^-+@#$%=*)'
                }
            }
        };
    },
};
</script>
<style lang="scss" scoped>
@import '~@/assets/scss/page/login/login.scss';
</style>