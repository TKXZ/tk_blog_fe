<script setup lang="ts">
import { defineProps } from 'vue'
import type { IndexMenuConfig } from './@types'

withDefaults(defineProps<IndexMenuConfig>(), {
  config: () => ({}),
})
</script>

<template>
  <div class="menu-container">
    <el-menu
      class="menu-container__main-menu"
      router
      :default-active="$router.currentRoute.value.path"
      :mode="config.mode ? config.mode : 'horizontal'"
      background-color="transparent"
      :collapse="config.collapse"
    >
      <el-menu-item index="/">
        <el-icon>
          <i-ep-lollipop />
        </el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/not-found">
        <el-icon>
          <i-ep-refresh />
        </el-icon>
        <span>更新日志</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.menu-container {
  &__main-menu {
    .el-menu-item {
      --el-menu-hover-bg-color: #40a0ff13;
    }
  }
}
</style>
