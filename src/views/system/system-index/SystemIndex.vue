<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AsideView from './components/AsideView.vue'
import SystemHeader from './components/SystemHeader.vue'
import emitter from '@/utils/event-bus'

const headerRef = ref<HTMLElement | null>(null)
const mainRef = ref<HTMLElement | null>(null)

const handleCollapseStyle = (isCollapse: boolean) => {
  if (headerRef.value && mainRef.value) {
    headerRef.value.$el.style.marginLeft = isCollapse ? '-177px' : '-40px'
    mainRef.value.$el.style.marginLeft = isCollapse ? '-177px' : '-40px'
  }
}
emitter.on('asideCollapse', handleCollapseStyle)

onMounted(() => {
  handleCollapseStyle(false)
})
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="240px" class="aside">
        <aside-view />
      </el-aside>
      <el-container>
        <el-header
          class="el-header"
          style="background-color: #00000031"
          ref="headerRef"
        >
          <system-header />
        </el-header>
        <el-main
          style="background-color: #00000060; margin-left: -40px"
          ref="mainRef"
          ><router-view name="system-main"></router-view
        ></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  position: relative;
  .aside {
    height: 100vh;
  }
  .el-header {
    transition: var(--el-transition-all);
  }

  .el-main {
    transition: var(--el-transition-all);
  }
}
</style>
