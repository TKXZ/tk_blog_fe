<script setup>
import HeaderCpt from '@/components/header/HeaderCpt.vue';
import FooterCpt from '@/components/footer/FooterCpt.vue';
import { nextTick, onMounted } from 'vue';

onMounted(() => {
  nextTick(() => {
    try {
      const $loading = document.getElementById('loading-container');
      $loading.style.opacity = 0;
      setTimeout(() => {
        $loading.style.display = 'none'
      }, 800)
    } catch (error) {
      console.error(error.message)
    }
  })
})

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <header-cpt />
      </el-header>
      <el-main class="app-main">
        <router-view></router-view>
      </el-main>
      <el-footer class="footer-container">
        <footer-cpt />
      </el-footer>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.app-main {
  overflow: visible !important;
}
.common-layout {
  background-color: $white-bg-color;
}

.footer-container {
  margin-top: 100px;
  height: 50px;
}
</style>
