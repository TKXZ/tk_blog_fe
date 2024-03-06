<script setup>
import HeaderCpt from '@/components/header/HeaderCpt.vue';
import FooterCpt from '@/components/footer/FooterCpt.vue';
import { nextTick, onMounted, onBeforeUnmount } from 'vue';
import eBus from '@/utils/event-bus'
import { closeLoading } from './utils/loading';

onMounted(() => {
  nextTick(() => {
    closeLoading()
  })
})

onBeforeUnmount(() => {
  eBus.$offAll();
})

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <header-cpt />
      </el-header>
      <el-main class="app-main">
        <router-view #default="{ route, Component }">
          <transition :enter-active-class="`animate__animated ${route.meta.transition_in}`">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </el-main>
      <el-footer class="footer-container">
        <footer-cpt />
      </el-footer>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.app-main {
  overflow: visible;
}
.common-layout {
  background-color: $white-bg-color;
}

.footer-container {
  margin-top: 100px;
  height: 50px;
}
</style>
