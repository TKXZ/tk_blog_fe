<script setup lang="ts">
import CatagoryList from '@/components/client/category-list/CatagoryList.vue'
import NoteList from '@/components/client/note-list/NoteList.vue'
import SearchCpt from '@/components/search/SearchCpt.vue'
</script>

<template>
  <div class="indexview-container">
    <el-row justify="center" class="search-row">
      <el-col :xs="18" :sm="16" :md="12" :lg="10" :xl="10">
        <search-cpt></search-cpt>
      </el-col>
    </el-row>
    <el-row justify="center">
      <el-col :xs="18" :sm="16" :md="12" :lg="10" :xl="10">
        <catagory-list></catagory-list>
      </el-col>
    </el-row>
    <el-row justify="center">
      <el-col
        class="new-note-list"
        :xs="22"
        :sm="20"
        :md="16"
        :lg="12"
        :xl="12"
      >
        <h3 class="note-list-title">最新文章</h3>
        <note-list></note-list>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss">
.indexview-container {
  display: flex;
  flex-direction: column;
  gap: 50px 0;
  .search-row {
    margin-top: 100px;
  }
  .note-list-title {
    margin: 20px 0;
    color: var(--el-color-primary);
  }
}
</style>
