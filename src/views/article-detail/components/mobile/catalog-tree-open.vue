<script setup>
import { Memo } from '@element-plus/icons-vue';

</script>


<template>
  <div class="catalog-tree-open-container">
    <el-button :icon="Memo" circle size="large" class="open-button"></el-button>
  </div>
</template>


<style lang="scss" scoped>
.catalog-tree-open-container {
  position: fixed;
  right: 20px;
  bottom: 50px;
  .open-button {
    font-size: var(--el-font-size-extra-small);
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 99;
  }
}
</style>