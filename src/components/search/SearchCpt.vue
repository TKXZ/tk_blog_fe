<script setup lang="ts">
import { ref, unref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import emitter from '@/utils/event-bus'

const searchContentRef = ref<string>('')

/**
 * 派发搜索
 */
const handleSearch = () => {
  emitter.emit('onSearch', unref(searchContentRef))
}
</script>

<template>
  <div class="search">
    <el-input
      v-model="searchContentRef"
      placeholder="输入搜索内容"
      :suffix-icon="Search"
      @keyup.enter="handleSearch"
    ></el-input>
  </div>
</template>

<style lang="scss"></style>
