<script setup lang="ts">
import router from '@/router'
import { ArrowLeftBold } from '@element-plus/icons-vue'

const handleBack = () => {
  router.back()
}
</script>

<template>
  <div class="not-found-container">
    <el-row>
      <el-col>
        <el-result icon="error" title="404 Not Found" sub-title="请返回">
          <template #extra>
            <el-button
              type="primary"
              size="large"
              class="back-btn"
              :icon="ArrowLeftBold"
              @click="handleBack"
            >
              <span>返回</span>
            </el-button>
          </template>
        </el-result>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.not-found-container {
  .back-btn {
    margin-top: 50px;
    width: 130px;
  }
}
</style>
