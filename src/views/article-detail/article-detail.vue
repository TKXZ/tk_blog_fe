<script setup lang="ts">
import { onMounted, reactive, nextTick, onBeforeUnmount, ref, unref } from 'vue'
import { Router, useRouter } from 'vue-router'
import { getArticleDetail } from '@/api/article'
import { myEach } from '@/utils/my-utils'
import emitter from '@/utils/event-bus'
import catalogTree from './components/catalog-tree.vue'
import catalogTreeMobile from './components/mobile/catalog-tree-mobile.vue'

const router: Router = useRouter()
const headingObserver = ref<IntersectionObserver | null>(null)
const isMobile = localStorage.getItem('isMobileDevice') || false

/**
 * 当前文章状态
 */
const articleState = reactive<ArticleStateRecord>({
  id: 0,
  content: '',
  catalog: [],
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

/**
 * 断开监视器
 */
const delObserver = () => {
  if (unref(headingObserver)) {
    ;(headingObserver.value as IntersectionObserver).disconnect()
  }
}

const createHeadingObserver = () => {
  /**
   * 创建观察器 - 标题
   */
  const createObserver = (
    callback: IntersectionObserverCallback,
    tarEls: HTMLElement | HTMLElement[] | HTMLCollectionOf<Element>,
  ): void => {
    const observerOption: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }

    const observer = new IntersectionObserver(callback, observerOption)
    if (tarEls instanceof Array || Object.hasOwnProperty.call(tarEls, length)) {
      myEach(tarEls, (el) => {
        observer.observe(el)
      })
    } else {
      observer.observe(tarEls as Element)
    }

    headingObserver.value = observer
  }

  /**
   * 查找在视口 可见度内标题
   */
  const findHeadingOnCurView = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        // 仅标题进入触发回调
        emitter.emit('onHeadingChange', e.target)
      }
    })
  }

  let $headingNodeList = document.getElementsByClassName('markdown-heading')
  createObserver(findHeadingOnCurView, $headingNodeList)
}

onMounted(async () => {
  articleState.id = +router.currentRoute.value.params.id
  await loadAritcleDetail(articleState.id)
  nextTick(() => {
    renderArticle('#markdown-body', articleState.content)
    createHeadingObserver()
  })
})

onBeforeUnmount(() => {
  delObserver()
})
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
