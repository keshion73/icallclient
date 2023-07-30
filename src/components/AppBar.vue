<template>
  <div>
    <v-app-bar color="#2F79E8" height="50px" flat>
      <v-breadcrumbs>
        <v-breadcrumbs-item to="/dashboard" active-class="active-breadcrumb">
          <img src="@/assets/images/common/icon-home.svg" alt="">
        </v-breadcrumbs-item>
        <li>
          <v-icon color="#fff">fa-chevron-right</v-icon>
        </li>
        <v-breadcrumbs-item>
          {{ $route.meta.groupName }}
        </v-breadcrumbs-item>
      </v-breadcrumbs>
      <!-- <v-row class="py-1">
      <v-col cols="12" sm="6" class="d-flex">
        <div>
          <v-breadcrumbs>
             <v-breadcrumbs-item to="/dashboard" active-class="active-breadcrumb">
          <img src="@/assets/images/common/icon-home.svg" alt="">
        </v-breadcrumbs-item>
            <li>
          <v-icon color="#399FC7">fa-chevron-right</v-icon>
        </li>
            <v-breadcrumbs-item class="opacity-5 text-dark">
              {{ $route.meta.groupName }}
            </v-breadcrumbs-item>            
          </v-breadcrumbs>
        </div>
        <div
          class="drawer-toggler pa-5 ms-6 cursor-pointer"
          :class="{ active: togglerActive }"
          @click="minifyDrawer"
          v-if="!$vuetify.breakpoint.mobile"
        >
          <div class="drawer-toggler-inner">
            <i class="drawer-toggler-line bg-body"></i>
            <i class="drawer-toggler-line bg-body"></i>
            <i class="drawer-toggler-line bg-body"></i>
          </div>
        </div>
      </v-col>
    </v-row> -->
      <div class="app-bar-rt">
        <img src="@/assets/images/common/icon-people.svg" alt="">
        <span>Yesign</span>
        <button class="logout-btn" v-if="!$vuetify.breakpoint.xs" @click="Modal = true">로그아웃</button>
      </div>
    </v-app-bar>
    <!-- <Modal @close="Modal = false" v-if="Modal" :icon="'icon01'" :title="'확인'">
      <p slot="mes">정말 로그아웃하시겠습니까?</p>
      <div slot="btn">
        <v-btn class="btntxt" x-large>취소</v-btn>
        <v-btn class="btnbg" x-large>확인</v-btn>
      </div>
    </Modal> -->
  </div>
</template>
<script>
// import Modal from '@/components/Modal.vue'
export default {
  components: {
    // Modal
  },
  name: "app-bar",
  data() {
    return {
      Modal: false
    };
  },
  methods: {
  },
  watch: {
  },
};
</script>
