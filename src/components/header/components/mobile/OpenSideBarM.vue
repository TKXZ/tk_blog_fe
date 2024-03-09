<script setup>
import eBus from '@/utils/event-bus';

const handleOpenSideBar = () => {
  eBus.$emit('onOpenMenu', true);
}
</script>


<template>
  <div class="open-header-container">
    <el-affix :offset="40" target="#app">
      <el-button type="primary" size="default" @click="handleOpenSideBar">
        <template #default>
          <el-icon>
            <i-ep-menu />
          </el-icon>
        </template>
      </el-button>
    </el-affix>
  </div>
</template>


<style lang="scss" scoped></style>