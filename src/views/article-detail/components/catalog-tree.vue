<script setup lang="ts">
import emitter from '@/utils/event-bus'
import { TreeInstance } from 'element-plus'
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { ObserverHeadingChangeCbData } from '../@types'

const treeRef = ref<TreeInstance | null>(null)
const curCatalogIdRef = ref<number | null>(null)
const $catalogTreeContainerRef = ref<HTMLElement | null>(null)

defineProps({
  catalog: {
    type: Array,
    required: true,
  },
  style: {
    type: Object,
    default: () => {
      return {
        height: '400px',
        overflow: 'auto',
        padding: '10px',
        position: 'sticky',
        top: '60px',
        borderLeft: '1px solid var(--el-border-color-lighter)',
      }
    },
  },
})
/**
 * 查找视口标题 在树id
 */
const findCurHeading = (arr: any[], text: string) => {
  try {
    arr.forEach((h) => {
      if (h.text === text) {
        curCatalogIdRef.value = h.$treeNodeId
        throw new Error('find cur heading') // 中断循环
      } else {
        if (h.children && h.children.length > 0) {
          findCurHeading(h.children, text)
        }
      }
    })
  } catch (e) {}
}

/**
 * 点击目录项
 */
const handleNodeClick = (nodeData, treeNode) => {
  const $t = document.getElementById(nodeData.text)
  // $t.scrollIntoView(true, { behavior: "smooth" });
  if ($t) {
    window.scrollTo({ top: $t.offsetTop, behavior: 'smooth' })
  }
}

/**
 * 观测视口标题更变回调
 */
const observeHeadingChangeCb = (data: ObserverHeadingChangeCbData) => {
  if (treeRef.value) {
    findCurHeading(treeRef.value.data, data.el?.textContent as string)
  }
  if ($catalogTreeContainerRef.value) {
    const $container = $catalogTreeContainerRef.value
    if ($container.offsetHeight !== 0) {
      $container.scrollTop =
        data.curElIndex * ($container.scrollHeight / data.count)
    }
  }
}

const defaultProps = {
  children: 'children',
  label: 'text',
}

onMounted(() => {
  nextTick(() => {
    emitter.on('onHeadingChange', observeHeadingChangeCb)
  })
})

onBeforeUnmount(() => {
  emitter.off('onHeadingChange', observeHeadingChangeCb)
})
</script>

<template>
  <div
    class="catalog-tree-container"
    :style="style"
    ref="$catalogTreeContainerRef"
  >
    <el-tree
      class="catalog-tree"
      ref="treeRef"
      :props="defaultProps"
      :data="catalog"
      :highlight-current="true"
      :default-expand-all="true"
      :current-node-key="curCatalogIdRef"
      :expand-on-click-node="false"
      @node-click="handleNodeClick"
    >
      <template #default="{ node }">
        <div class="custom-tree-node" ref="custom-tree-node">
          <span>{{ node.label }}</span>
        </div>
      </template>
    </el-tree>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/style/mixin.scss' as _mixin;

.catalog-tree {
  .el-tree-node.is-current > .el-tree-node__content > .custom-tree-node {
    color: var(--el-color-primary);
  }
  .custom-tree-node {
    @include _mixin.single-text;
  }
}
</style>
