<script setup lang="ts">
import HeaderCpt from '@/components/client/header/HeaderView.vue'
import FooterCpt from '@/components/client/footer/FooterCpt.vue'
</script>

<template>
  <div class="indexview-container">
    <el-container>
      <el-header class="el-header-container">
        <header-cpt />
      </el-header>
      <el-main class="app-main">
        <template #default>
          <router-view #default="{ Component }" name="client-main">
            <transition
              :enter-active-class="`animate__animated animate__fadeIn`"
            >
              <component :is="Component"></component>
            </transition>
          </router-view>
        </template>
      </el-main>
      <el-footer class="footer-container" id="footer-container">
        <template #default>
          <footer-cpt />
        </template>
      </el-footer>
    </el-container>
  </div>
</template>

<style lang="scss">
.app-main {
  overflow: visible; // 兼容 sticky
}

.common-layout {
  background-color: var(--el-bg-color);
  transition: var(--el-transition-all);
}

.footer-container {
  margin-top: 100px;
}
</style>
