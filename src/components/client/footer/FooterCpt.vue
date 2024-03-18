<script setup lang="ts"></script>

<template>
  <div class="footer">
    <div class="footer-content">
      <el-row justify="center">
        <el-col :span="12" class="footer-text-box">
          <span class="made">Made with ❤️ by TK_Wang</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  .footer-content {
    .footer-text-box {
      display: flex;
      justify-content: center;

      .made {
        font-size: var(--el-font-size-extra-small);
      }
    }
  }
}
</style>
