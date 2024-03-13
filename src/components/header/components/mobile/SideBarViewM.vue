<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import emitter from '@/utils/event-bus'
import type { IndexMenuConfig } from '../pc/@types'
import { getHeaderTitle } from '../data'

const titleData = reactive(getHeaderTitle())

const menuConfig = reactive<IndexMenuConfig>({
  config: {
    mode: 'vertical',
  },
})
const isOpenMenuRef = ref<boolean>(false)
const directionRef = ref<string>('ltr')

onMounted(() => {
  emitter.on('onOpenMenu', () => {
    isOpenMenuRef.value = true
  })
})
</script>

<template>
  <div class="header-container">
    <open-side-bar-m :is-menu-open="isOpenMenuRef"></open-side-bar-m>
    <div class="header-container__panel">
      <el-drawer
        v-model="isOpenMenuRef"
        :size="'40%'"
        :direction="directionRef"
      >
        <template #header="{ titleId }">
          <p :id="titleId" style="font-size: smaller">{{ titleData.title }}</p>
        </template>
        <template #default>
          <div class="header-container__panel__body">
            <div class="header-container__panel__avatar-box">
              <el-avatar
                class="avatar-image"
                icon="el-icon-user-solid"
                size="large"
                shape="circle"
                src="/images/avatar.jpg"
                fit="fill"
              ></el-avatar>
            </div>
            <el-divider
              direction="horizontal"
              content-position="left"
            ></el-divider>
            <menu-area :config="menuConfig.config"></menu-area>
          </div>
        </template>
        <template #footer>
          <div class="header-container__panel__footer">
            <feature-area></feature-area>
          </div>
        </template>
      </el-drawer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-container {
  &__panel {
    :deep(.el-drawer__body) {
      padding: 0;
    }

    &__avatar-box {
      width: 100%;
      text-align: center;

      .avatar-image {
        box-shadow: var(--el-box-shadow);
      }
    }
  }
}
</style>
