<script setup lang="ts">
import { onMounted, reactive, nextTick } from 'vue'
import { Router, useRouter } from 'vue-router'
import { getArticleDetail } from '@/api/article'
import catalogTree from './components/catalog-tree.vue'
import catalogTreeMobile from './components/mobile/catalog-tree-mobile.vue'

const router: Router = useRouter()

/**
 * 当前文章状态
 */
const articleState = reactive<ArticleStateRecord>({
  id: 0,
  content: '',
  catalog: [],
})

onMounted(async () => {
  articleState.id = +router.currentRoute.value.params.id
  await loadAritcleDetail(articleState.id)
  nextTick(() => {
    renderArticle('#markdown-body', articleState.content)
  })
})

/**
 * 获取文章详情
 * @param {*} id
 */
const loadAritcleDetail = async (id: number): Promise<void> => {
  const { catalog, htmlContent } = await getArticleDetail(id)
  articleState.content = htmlContent
  articleState.catalog = JSON.parse(catalog)
}

/**
 * 插入文章内容 到 DOM
 */
const renderArticle = (selector: string, data: string): void => {
  const $node = document.querySelector(selector)
  $node ? ($node.innerHTML = data) : ''
}
</script>

<template>
  <div class="article-detail">
    <el-row justify="center">
      <el-col :xs="22" :sm="20" :md="16" :lg="12" :xl="12">
        <div class="markdown-body" id="markdown-body"></div>
      </el-col>
      <el-col :span="5" :offset="1" class="catalog_tree_pc">
        <catalog-tree :catalog="articleState.catalog"></catalog-tree>
      </el-col>
    </el-row>
    <div class="catalog_tree_mobile">
      <catalog-tree-mobile
        :catalog="articleState.catalog"
      ></catalog-tree-mobile>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
