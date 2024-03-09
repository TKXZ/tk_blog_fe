<script setup>
import { ref, reactive, onMounted } from 'vue'
import eBus from '@/utils/event-bus';

const menuConfig = reactive({
  mode: 'vertical',
})
const isOpenMenu = ref(false)
const direction = ref('ltr');

onMounted(() => {
  eBus.$on('onOpenMenu', () => { isOpenMenu.value = true })
})
</script>


<template>
  <div class="header-container">
    <open-side-bar-m :is-menu-open="isOpenMenu"></open-side-bar-m>
    <div class="header-container__panel">
      <el-drawer v-model="isOpenMenu" :size="'40%'" :direction="direction">
        <template #header="{ titleId }">
          <p :id="titleId" style="font-size: smaller;">TK_Blog</p>
        </template>
        <template #default>
          <div class="header-container__panel__body">
            <div class="header-container__panel__avatar-box">
              <el-avatar class="avatar-image" icon="el-icon-user-solid" size="large" shape="circle"
                src="/images/avatar.jpg" fit="fill"></el-avatar>
            </div>
            <el-divider direction="horizontal" content-position="left"></el-divider>
            <menu-area :config="menuConfig"></menu-area>
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