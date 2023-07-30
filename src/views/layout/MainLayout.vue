<template>
  <v-app>
    <Header></Header>
    <SubHeader v-if="!$vuetify.breakpoint.xs"></SubHeader>
    <v-container fluid class="main-wrap">
      <!-- <Modal @close="Modal = false" :icon="'icon01'" v-if="Modal" :title="'확인'">
      <p slot="mes">정말 로그아웃하시겠습니까?</p>
      <div slot="btn">
        <v-btn x-large class="btntxt">취소</v-btn>
        <v-btn x-large class="btnbg">확인</v-btn>
      </div>
    </Modal> -->
      <router-view></router-view>
    </v-container>
    <Footer></Footer>
  </v-app>
</template>
    
<script>
import Header from './Header.vue';
import SubHeader from './SubHeader.vue';
import Footer from './Footer.vue';
// import Modal from '@/components/Modal.vue'


export default {
  components: {
    Header,
    SubHeader,
    Footer,
    // Modal
  },
}
</script>
<style lang="scss" scoped>
main::v-deep {
  .v-main__wrap {
    min-height: 100%;
    padding-bottom: 40px;
  }
}
</style>