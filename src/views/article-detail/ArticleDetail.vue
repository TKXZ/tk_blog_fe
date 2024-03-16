<script setup lang="ts">
import { onMounted, reactive, nextTick, onBeforeUnmount, ref, unref } from 'vue'
import { Router, useRouter } from 'vue-router'
import { getArticleDetail } from '@/api/article'
import { myEach } from '@/utils/my-utils'
import emitter from '@/utils/event-bus'
import type { ArticleStateRecord } from './@types'
import { throttle } from '@/utils/my-utils/throttle'
import catalogTree from './components/CatalogTree.vue'
import catalogTreeMobile from './components/mobile/CatalogTreeM.vue'
import ArticleSkeleton from './components/ArticleSkeleton.vue'
import CatalogSkeleton from './components/CatalogSkeleton.vue'

const router: Router = useRouter()
const articleDetailRef = ref<HTMLElement | null>(null)
const headingObserver = ref<IntersectionObserver | null>(null)
let $headingNodeList = document.querySelectorAll('.markdown-heading') // 获取所有标题DOM

// 文章获取状态
const isLoading = ref<boolean>(true)

/**
 * 当前文章状态
 */
const articleState = reactive<ArticleStateRecord>({
  id: 0,
  content: '',
  catalog: [],
  catalogM: [],
})

/**
 * 获取文章详情
 * @param {*} id
 */
const loadAritcleDetail = async (id: number): Promise<void> => {
  const { catalog, htmlContent } = await getArticleDetail(id)
  isLoading.value = false
  articleState.content = htmlContent
  articleState.catalog = JSON.parse(catalog)
  articleState.catalogM = JSON.parse(catalog)
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

// window.addEventListener(
//   'scroll',
//   throttle(() => {
//     if (window.scrollY < 60) {
//       emitter.emit('onHeadingChange', {
//         el: $headingNodeList[0],
//         curElIndex: 0,
//         count: $headingNodeList.length,
//       })
//     } else if (articleDetailRef.value) {
//       if (
//         window.scrollY >=
//         articleDetailRef.value?.offsetHeight - (window.screen.availHeight + 600)
//       ) {
//         emitter.emit('onHeadingChange', {
//           el: $headingNodeList[$headingNodeList.length - 1],
//           curElIndex: $headingNodeList.length - 1,
//           count: $headingNodeList.length,
//         })
//       }
//     }
//   }, 600),
// )

/**
 * 创建标题与视口观察器
 */
const createHeadingObserver = () => {
  let prevScrollY = 0 // 记录前一次滚动距离
  let $headingNodeList = document.querySelectorAll('.markdown-heading') // 获取所有标题DOM

  const createObserver = (
    callback: IntersectionObserverCallback,
    tarEls: HTMLElement | HTMLElement[] | HTMLCollectionOf<Element> | NodeList,
  ): void => {
    // 配置
    const observerOption: IntersectionObserverInit = {
      root: null,
      rootMargin: '-120px', // 移动端不会生效
      threshold: 1.0,
    }

    // 观察器
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

  // 寻找并派发视口标题事件
  const findAndEmit = (e) => {
    let index // 记录当前标题在DOM节点列表中位置
    try {
      // 找到当前标题位置
      $headingNodeList.forEach((h, i) => {
        if (h.textContent === e.target.textContent) {
          index = i
          throw new Error('')
        }
      })
    } catch (err) {}
    // 仅标题进入触发回调
    emitter.emit('onHeadingChange', {
      el: e.target,
      curElIndex: index,
      count: $headingNodeList.length,
    })
  }

  /**
   * 查找在视口 可见度内标题
   */
  const findHeadingOnCurView = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) => {
    if (entries.length === $headingNodeList.length) return // 防止第一次全部元素触发
    if (window.scrollY < 60) {
      emitter.emit('onHeadingChange', {
        el: $headingNodeList[0],
        curElIndex: 0,
        count: $headingNodeList.length,
      })
    } else {
      if (window.scrollY > prevScrollY) {
        entries.forEach((e) => {
          // 离开视口
          if (!e.isIntersecting) {
            findAndEmit(e)
          }
        })
      } else {
        entries.forEach((e) => {
          // 进入视口
          if (e.isIntersecting) {
            findAndEmit(e)
          }
        })
      }
      prevScrollY = window.scrollY
    }
  }

  createObserver((entries, observer) => {
    requestIdleCallback(() => {
      findHeadingOnCurView(entries, observer)
    })
  }, $headingNodeList)
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
  <div class="article-detail" ref="articleDetailRef">
    <el-row justify="center">
      <el-col :xs="22" :sm="20" :md="16" :lg="12" :xl="12">
        <article-skeleton v-if="isLoading" />
        <div class="markdown-body" id="markdown-body" v-else></div>
      </el-col>
      <el-col
        :span="5"
        :offset="1"
        class="catalog_tree_pc"
        @mouseenter="delObserver"
        @mouseleave="createHeadingObserver"
      >
        <catalog-skeleton v-if="isLoading" />
        <catalog-tree :catalog="articleState.catalog" v-else></catalog-tree>
      </el-col>
    </el-row>
    <div class="catalog_tree_mobile">
      <catalog-tree-mobile
        v-if="!isLoading"
        :catalog="articleState.catalogM"
      ></catalog-tree-mobile>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-detail {
  margin-top: 30px;
}
</style>
