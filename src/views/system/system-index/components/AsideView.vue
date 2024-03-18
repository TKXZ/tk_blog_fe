<script setup lang="ts">
import { ref, unref } from 'vue'
import emitter from '@/utils/event-bus'

const isCollapse = ref(false)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleClickCollapseBtn = () => {
  isCollapse.value = !isCollapse.value
  if (unref(isCollapse)) {
    emitter.emit('asideCollapse', true)
  } else {
    emitter.emit('asideCollapse', false)
  }
}
</script>

<template>
  <div>
    <el-menu
      default-active="2"
      class="aside-menu"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <div
        :class="`aside-menu-header ${isCollapse ? 'aside-menu-header-collapse' : ''}`"
      >
        <p v-show="!isCollapse">sz_Notes SYS</p>
        <el-avatar
          v-show="isCollapse"
          class="avatar-image"
          icon="el-icon-user-solid"
          size="default"
          shape="circle"
          src="/images/avatar.jpg"
          fit="fill"
        ></el-avatar>
      </div>
      <el-divider style="margin: 0" />
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Icon icon="Location" /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><Icon icon="Menu" /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <div class="aside-menu__collapse-btn" @click="handleClickCollapseBtn">
        <el-icon>
          <Icon icon="ArrowRight" v-if="isCollapse" />
          <Icon icon="ArrowLeft" v-if="!isCollapse" />
        </el-icon>
      </div>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.aside-menu-header {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 60px;
  padding: 20px 0;
  margin-right: 40px;
  // background-color: #40a0ff13;
  transition: all var(--el-transition-duration)
    var(--el-transition-function-fast-bezier);
  &-collapse {
    width: 64px !important;
  }
}
.aside-menu {
  margin-right: 40px; // 空出展开按钮的长度
  &__collapse-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: -31px;
    top: 80%;
    width: 30px;
    height: 40px;
    border-radius: 0 30px 30px 0;
    background-color: var(--el-bg-color);
    box-shadow: --el-box-shadow-lighter;
    cursor: pointer;
  }
}
</style>
