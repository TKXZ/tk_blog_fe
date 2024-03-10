<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { Router, useRouter } from 'vue-router'
import type { IndexMenuConfig } from './@types'

const router: Router = useRouter()

const activeIndexRef = ref<string>('1')

/**
 * 菜单更变
 */
const handleSelectMenu = (key: string) => {
  if (key === '2') {
    router.push({
      path: '/not-found',
    })
  }
}

withDefaults(defineProps<IndexMenuConfig>(), {
  config: () => ({}),
})
</script>

<template>
  <div class="menu-container">
    <el-menu
      class="menu-container__main-menu"
      :default-active="activeIndexRef"
      :mode="config.mode ? config.mode : 'horizontal'"
      @select="handleSelectMenu"
      background-color="transparent"
      :collapse="config.collapse"
      popper-effect="dark"
    >
      <el-menu-item index="1">
        <el-icon>
          <i-ep-notebook />
        </el-icon>
        <span>笔记</span>
      </el-menu-item>
      <el-menu-item index="2">
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
