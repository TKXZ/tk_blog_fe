<script setup>
import NoteList from '@/components/note-list/NoteList.vue';
import SearchCpt from '@/components/search/SearchCpt.vue';

</script>


<template>
  <el-row justify="center" class="search-row">
    <el-col :xs="18" :sm="16" :md="12" :lg="10" :xl="10">
      <search-cpt></search-cpt>
    </el-col>
  </el-row>
  <el-row justify="center">
    <el-col class="new-note-list" :xs="22" :sm="20" :md="16" :lg="12" :xl="12">
      <note-list></note-list>
    </el-col>
  </el-row>
</template>


<style lang="scss">
.search-row {
  margin: 100px 0;
}
</style>