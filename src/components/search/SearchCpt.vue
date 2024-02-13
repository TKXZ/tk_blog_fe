<script setup>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';

const searchContent = ref("");
</script>


<template>
  <div class="search">
    <el-input v-model="searchContent" placeholder="输入搜索内容" :suffix-icon="Search">

    </el-input>
  </div>
</template>


<style lang="scss"></style>