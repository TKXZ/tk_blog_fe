<script setup lang="ts">
import { defineProps, ref } from 'vue'
import type { IndexMenuConfig, MenuDataRecordRaw } from './@types'
import { getHeaderMenuData } from '../../data'
import DynamicMenu from './DynamicMenu.vue'

const menuDataRef = ref<MenuDataRecordRaw>(getHeaderMenuData())

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
      <dynamic-menu :menu-arr="menuDataRef" />
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.menu-container {
  .el-menu {
    :deep(.el-menu-item) {
      --el-menu-hover-bg-color: #40a0ff13;
    }
  }
}
</style>
