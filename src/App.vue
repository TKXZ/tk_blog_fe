<script setup lang="ts">
import HeaderCpt from '@/components/header/HeaderView.vue'
import FooterCpt from '@/components/footer/FooterCpt.vue'
import { nextTick, onBeforeUnmount, onMounted } from 'vue'
import { closeLoading } from './utils/loading'

onMounted(() => {
  nextTick(() => {
    closeLoading()
  })
})
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="el-header-container">
        <header-cpt />
      </el-header>
      <el-main class="app-main">
        <router-view #default="{ Component }">
          <transition
            :enter-active-class="`animate__animated animate__fadeInUp animate__fast`"
          >
            <component :is="Component"></component>
          </transition>
        </router-view>
      </el-main>
      <el-footer class="footer-container">
        <footer-cpt />
      </el-footer>
    </el-container>
  </div>
  <back-top></back-top>
</template>

<style lang="scss" scoped>
.app-main {
  overflow: visible; // 兼容 sticky
}

.common-layout {
  background-color: var(--el-bg-color);
}

.footer-container {
  margin-top: 100px;
  height: 50px;
}
</style>
