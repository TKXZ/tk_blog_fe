<script setup>
import { ref } from 'vue';

const activeIndex = ref("1");

</script>

<template>
  <div class="header">
    <el-row class="header__row" :align="middle">
      <el-col :xs="12" :sm="12" :md="8" :lg="6" :xl="4" class="header__col">
        <h1 class="header__title">Beta</h1>
      </el-col>
      <el-col :xs="12" :sm="12" :md="16" :lg="12" :xl="12" class="header__col">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">学习笔记</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.header {
  background-color: $white-bg-color;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  box-sizing: border-box;
  padding: 0 20px;

  &__row {
    border-bottom: 1px solid $border-color-light;

    .el-menu--horizontal.el-menu {
      border-bottom: none;
    }
  }

  &__col {
    height: 60px;
  }

  &__title {
    font-size: 32px;
    color: $color-primary;
    height: 60px;
    line-height: 60px;
  }

}
</style>