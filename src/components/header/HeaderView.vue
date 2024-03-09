<script setup>
</script>

<template>
  <div class="header-pc">
    <el-row class="header-pc__row" align="middle">
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="4" class="header-pc__col">
        <title-area />
      </el-col>
      <el-col class="header-pc__col" :xs="{ span: 12, offset: 0 }" :sm="{ span: 12, offset: 0 }"
        :md="{ span: 14, offset: 0 }" :lg="{ span: 12, offset: 0 }" :xl="{ span: 12, offset: 2 }">
        <menu-area />
      </el-col>
      <el-col :span="4">
        <feature-area />
      </el-col>
    </el-row>
  </div>
  <div class="header-mobile">
    <side-bar-view-m></side-bar-view-m>
  </div>
</template>

<style lang="scss">
.header-pc {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  box-sizing: border-box;
  padding: 0 20px;
  backdrop-filter: saturate(50%) blur(4px);
  background-image: radial-gradient(transparent 1px, var(--el-bg-color) 1px);
  background-size: 4px 4px;

  &__row {
    border-bottom: var(--el-border-width) solid var(--el-border-color);

    .el-menu--horizontal.el-menu {
      border-bottom: none;
    }
  }

  &__col {
    height: 60px;
  }
}
</style>