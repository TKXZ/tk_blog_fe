<script setup>
import { onMounted, reactive, nextTick } from 'vue';
import { useRouter } from 'vue-router'
import { getArticleDetail } from '@/api/article';
import catalogTree from './components/catalog-tree.vue'


const router = useRouter();
const articleState = reactive({
  id: 0,
  content: '',
  catalog: [],
})

onMounted(async () => {
  articleState.id = router.currentRoute.value.params.id;
  await loadAritcleDetail(articleState.id);
  nextTick(() => {
    renderArticle('markdown-body', articleState.content)
  })
})

/**
 * 获取文章详情
 * @param {*} id 
 */
const loadAritcleDetail = async (id) => {
  const { catalog, htmlContent } = await getArticleDetail(id);
  articleState.content = htmlContent;
  articleState.catalog = JSON.parse(catalog);
}

/**
 * 插入文章内容 到 DOM
 */
const renderArticle = (nodeId, data) => {
  const $node = document.getElementById(nodeId);
  $node.innerHTML = data;
}
</script>


<template>
  <div class="article-detail">
    <el-row justify="center">
      <el-col :xs="22" :sm="20" :md="16" :lg="12" :xl="12">
        <div class="markdown-body" id="markdown-body"></div>
      </el-col>
      <el-col :span="5" :offset="1" class="tree">
        <catalog-tree :catalog="articleState.catalog"></catalog-tree>
      </el-col>
    </el-row>
  </div>
</template>


<style lang="scss" scoped>
</style>