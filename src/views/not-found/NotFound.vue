<script setup lang="ts">
import { ArrowLeftBold } from '@element-plus/icons-vue'

const handleBack = () => {
  history.back()
}
</script>

<template>
  <div class="not-found-container">
    <img class="not-found-img" src="/images/not-found.jpg" alt="" />
    <el-button
      type="primary"
      size="large"
      class="back-btn"
      :icon="ArrowLeftBold"
      @click="handleBack"
    >
      <span>返回</span>
    </el-button>
  </div>
</template>

<style lang="scss" scoped>
.not-found-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .back-btn {
    margin-top: 50px;
    width: 150px;
  }
}
</style>
