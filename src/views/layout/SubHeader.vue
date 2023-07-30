<template>
  <div class="sub-header">
    <div class="container d-flex">
      <v-breadcrumbs>
        <v-breadcrumbs-item to="/Main" active-class="active-breadcrumb">
          <img src="@/assets/images/common/icon-home.svg" alt="">
        </v-breadcrumbs-item>
        <li>
          <v-icon color="#fff">fa-chevron-right</v-icon>
        </li>
        <v-breadcrumbs-item>
          {{ $route.meta.groupName }}
        </v-breadcrumbs-item>
      </v-breadcrumbs>
      <!-- <div class="sub-hd-info d-flex">
        <div class="d-flex">
          <p class="mark">잔액</p>
          <p><span class="font-weight-bolder">7,200 </span>원</p>
          <button><img src="@/assets/images/common/icon-re.svg" alt=""
              style="margin-left: 4px;vertical-align: middle;"></button>
        </div>
        <div class="d-flex bank">
          <p class="mark">전용계좌</p>
          <div class="d-flex">
            <p class="font-weight-bold" style="display: inline-block">79606702902101</p>
            <button><img src="@/assets/images/common/icon-copy.svg" alt=""></button>
            <p>카카오뱅크</p>
          </div>
        </div>
      </div> -->
      <!-- <div class="d-flex user">
        <div>
          <img src="@/assets/images/common/icon-people.svg" alt="" />
          <p>Yesign</p>
        </div>
        <button class="logout-btn" @click="Modal = true">로그아웃</button>
      </div> -->
      <!-- 로그인전 -->
      <!-- <div class="d-flex user">
          <img src="@/assets/images/common/icon-people.svg" alt=""/>
          <p>로그인하기</p>
          <button class="logout-btn" v-if="!$vuetify.breakpoint.xs" @click="Modal=true">로그인</button>
        </div> -->
    </div>
  </div>
</template>
<script>
import Lnb from './Lnb.vue';
import AppBar from "@/components/AppBar.vue";
export default {
  components: {
    Lnb,
    AppBar
  },
  mounted() { },

  data() {
    return {
      // Modal: false
    }
  },
  methods: {},
  watch: {},
}
</script>