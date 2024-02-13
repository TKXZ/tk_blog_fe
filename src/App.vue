<script setup>
import HeaderCpt from '@/components/header/HeaderCpt.vue';
import FooterCpt from '@/components/footer/FooterCpt.vue';

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <header-cpt />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer class="footer-container">
        <footer-cpt />
      </el-footer>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  background-color: $white-bg-color;
}

.footer-container {
  margin-top: 100px;
  height: 50px;
}
</style>
