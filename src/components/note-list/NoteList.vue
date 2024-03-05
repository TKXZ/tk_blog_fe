<script setup>
import { useRouter } from 'vue-router';
import { getArticleList } from '@/api/article';
import { onMounted, ref, unref, reactive } from 'vue';
import NoteListItem from './NoteListItem.vue';
import EmptyData from '@/components/empty-data/EmptyData.vue';

const router = useRouter();

/**
 * 文章列表配置
 */
const getListConfig = ref({
  search: '',
  page: 1,
  size: 10,
});

const articleList = reactive({
  list: [],
  total: 35,
});

/**
 * 获取文章列表
 * @param {*} option 
 */
async function loadArticleList(option) {
  const data = await getArticleList(option);
  articleList.list = data;
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
  loadArticleList(unref(getListConfig))
})

</script>

<template>
  <div class="note-list">
    <el-space direction="vertical" :fill="true" :size="20" class="note-list__el-space" v-if="articleList.list.length > 0">
      <note-list-item v-for="(item) in articleList.list" :key="item.id" :data="item"
        :default-click="() => { handleClickNote(item.id) }"></note-list-item>
    </el-space>
    <empty-data v-else></empty-data>
    <el-pagination background layout="prev, pager, next" :total="articleList.list.length"
      :page-size="getListConfig.size" />
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