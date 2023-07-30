<template>
  <div class="page-tit">
    <h2 class="text-h2 font-weight-bolder">
      {{ $route.name }}
    </h2>
    <slot v-if="!$vuetify.breakpoint.xs"></slot>
  </div>
</template>
<script>
// import Modal from '@/components/Modal.vue'
export default {
  data() {
    return {
    };
  },
  methods: {
  },
  watch: {
  },
};
</script>
