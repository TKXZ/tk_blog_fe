<script setup lang="ts">
import HeaderCpt from '@/components/header/HeaderView.vue'
import FooterCpt from '@/components/footer/FooterCpt.vue'
import { nextTick, onBeforeUnmount, onMounted } from 'vue'
import { closeLoading } from './utils/loading'
// import { useDevice } from './utils/device/useDevice'
// import { throttle } from './utils/my-utils/throttle/throttle'
// import emitter from './utils/event-bus'

// const setDevice2Storge = throttle(() => {
//   localStorage.setItem('device', useDevice())
//   emitter.emit('onChangeDevice')
// }, 300)

// window.addEventListener('resize', setDevice2Storge)

onMounted(() => {
  nextTick(() => {
    closeLoading()
  })
})

// onBeforeUnmount(() => {
//   window.removeEventListener('resize', setDevice2Storge)
// })
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
