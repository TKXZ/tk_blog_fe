<script setup lang="ts">
import emitter from '@/utils/event-bus'
import { TreeInstance } from 'element-plus'
import { nextTick, onMounted, ref } from 'vue'

const treeRef = ref<TreeInstance | null>(null)
const curCatalogIdRef = ref<number | null>(null)

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

const defaultProps = {
  children: 'children',
  label: 'text',
}

onMounted(() => {
  nextTick(() => {
    emitter.on('onHeadingChange', (newEl) => {
      setTimeout(() => {
        if (treeRef.value) {
          findCurHeading(treeRef.value.data, newEl?.textContent as string)
        }
      })
    })
  })
})
</script>

<template>
  <div class="catalog-tree-container" :style="style">
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
  .el-tree-node.is-current .custom-tree-node {
    color: var(--el-color-primary);
  }
  .custom-tree-node {
    @include _mixin.single-text;
  }
}
</style>
