<script setup lang="ts">
import { reactive } from 'vue'
import { getHeaderTitle } from '../../data'

const titleData = reactive(getHeaderTitle())
</script>

<template>
  <div class="title-container">
    <h1 class="title-container__title">
      <span class="title-container__title__text">{{ titleData.title }}</span>
      <el-tag
        class="title-container__title__vtag"
        type="primary"
        size="small"
        effect="light"
      >
        <template #default>
          <span class="vtag__text">{{ titleData.ver }}</span>
        </template>
      </el-tag>
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.title-container {
  &__title {
    position: relative;
    display: inline-block;
    font-size: 32px;
    color: var(--el-color-primary);
    height: 60px;
    line-height: 60px;

    &__vtag {
      position: absolute;
      top: 8px;
      right: -65px;
    }
  }
}
</style>
../../data
