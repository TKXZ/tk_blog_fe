<script setup lang="ts">
import HeaderCpt from '@/components/header/HeaderView.vue'
import FooterCpt from '@/components/footer/FooterCpt.vue'
import { nextTick, onMounted } from 'vue'
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
        <template #default>
          <router-view #default="{ Component }">
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
}
</style>
