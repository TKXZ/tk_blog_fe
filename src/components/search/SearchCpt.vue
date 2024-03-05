<script setup>
import { ref, unref } from 'vue';
import { Search } from '@element-plus/icons-vue';
import eBus from '@/utils/event-bus';

const searchContent = ref("");

const handleSearch = () => {
  eBus.$emit('onSearch', unref(searchContent))
}

</script>


<template>
  <div class="search">
    <el-input v-model="searchContent" placeholder="输入搜索内容" :suffix-icon="Search" @keyup.enter="handleSearch"></el-input>
  </div>
</template>


<style lang="scss"></style>