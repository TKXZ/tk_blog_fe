<script setup>
import { useRouter } from 'vue-router';
import { getArticleList } from '@/api/article';
import { onMounted, reactive, onBeforeUnmount } from 'vue';
import NoteListItem from './NoteListItem.vue';
import EmptyData from '@/components/empty-data/EmptyData.vue';
import eBus from '@/utils/event-bus';

const router = useRouter();
/**
 * 搜索框查询
 */
const handleSearch = (search) => {
  getListConfig.search = search;
  getListConfig.page = 1;
  loadArticleList(getListConfig)
}
eBus.$on('onSearch', handleSearch)

const pageChange = (page) => {
  getListConfig.page = page;
  loadArticleList(getListConfig)
}
const sizeChange = (size) => {
  getListConfig.size = size;
  loadArticleList(getListConfig)
}
/**
 * 文章列表配置
 */
const getListConfig = reactive({
  search: '',
  page: 1,
  size: 8,
});

const articleList = reactive({
  list: [],
  count: 0,
});

/**
 * 获取文章列表
 * @param {*} option 
 */
async function loadArticleList(option) {
  const { articleList: list, count } = await getArticleList(option);
  articleList.list = list;
  articleList.count = count;
}

/**
 * 点击文章
 * @param {*} id 
 */
function handleClickNote(id) {
  router.push({
    name: 'ArticleDetail',
    params: { id },
  })
}

onMounted(() => {
  loadArticleList(getListConfig)
})

onBeforeUnmount(() => {
  eBus.$off('onSearch', handleSearch)
})

</script>

<template>
  <div class="note-list">
    <el-space 
      direction="vertical" 
      :fill="true" 
      :size="20" 
      class="note-list__el-space" 
      v-if="articleList.count > 0">
      <note-list-item v-for="(item) in articleList.list" :key="item.id" :data="item"
        :default-click="() => { handleClickNote(item.id) }"></note-list-item>
    </el-space>
    <empty-data v-else></empty-data>
    <el-pagination 
      background 
      layout="prev, pager, next"
      :total="articleList.count" 
      v-show="articleList.count > getListConfig.size"
      :page-size="getListConfig.size" 
      :current-page="getListConfig.page" 
      @current-change="pageChange" 
      @size-change="sizeChange"/>
  </div>
</template>


<style lang="scss">
.note-list {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__el-space {
    width: 100%;
    margin-bottom: $md-block-space;
  }
}
</style>