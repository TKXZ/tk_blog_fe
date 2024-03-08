<script setup>
import { Notebook, Refresh } from '@element-plus/icons-vue';
import { ref } from 'vue';

const activeIndex = ref("1");

const handleSelectMenu = (key) => {
  if (key === '2') {
    history.hash = '#/not-found'
  }
}

</script>

<template>
  <div class="header">
    <el-row class="header__row" align="middle">
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="4" class="header__col">
        <h1 class="header__title">
          <span>TK_Blog</span>
          <el-tag class="header__title__vtag" type="primary" size="small" effect="light">Beta</el-tag>
        </h1>
      </el-col>
      <el-col
        class="header__col"
        :xs="{span: 12, offset: 0}" 
        :sm="{span: 12, offset: 0}" 
        :md="{span:14, offset: 0}" 
        :lg="{span:12, offset: 0}" 
        :xl="{span:12, offset: 2}" 
        >
        <el-menu 
          class="header__el-menu" 
          :default-active="activeIndex"  
          mode="horizontal" 
          @select="handleSelectMenu"
          background-color="transparent"
          popper-effect="dark">
          <el-menu-item index="1">
            <el-icon><Notebook /></el-icon>
            <span>笔记</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><Refresh /></el-icon>
            <span>更新日志</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  box-sizing: border-box;
  padding: 0 20px;
  backdrop-filter: saturate(50%) blur(4px);
  background-image: radial-gradient(transparent 1px, var(--el-color-white) 1px);
  background-size: 4px 4px;

  &__el-menu {
    .el-menu-item {
      --el-menu-hover-bg-color: #40a0ff13;
    }
  }

  &__row {
    border-bottom: var(--el-border-width) solid var(--el-border-color);

    .el-menu--horizontal.el-menu {
      border-bottom: none;
    }
  }

  &__col {
    height: 60px;
  }

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
      right: -55px;
    }
  }

}
</style>