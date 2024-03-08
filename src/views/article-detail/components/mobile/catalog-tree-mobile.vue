<script setup>
import { defineProps, ref, reactive } from 'vue';
import catalogTree from '../catalog-tree.vue';
import catalogTreeOpen from './catalog-tree-open.vue';

const treeMask = ref(null);
const treeStyle = reactive({
    position: 'fixed',
    right: '-100%',
    top: '60px',
    bottom: '0',
    maxWidth: '60%',
    overflow: 'scroll',
    backgroundColor: 'var(--el-color-white)',
    transition: 'right .5s ease 0s',
})

/**
 * 关闭目录树
 */
const closeCatalogTree = () => {
  const $treeMask = treeMask.value;

  $treeMask.style.background = 'transparent';
  setTimeout(() => {
    $treeMask.style.display = 'none';
  }, 300)

  treeStyle.right = `-1000px`
}

/**
 * 打开目录树
 */
const openCatalogTree = () => {
  const $treeMask = treeMask.value;

  $treeMask.style.background = '#0000001f';
  $treeMask.style.display = 'block';
  setTimeout(() => {
    treeStyle.right = '0px'
  })
}

defineProps({
  catalog: {
    type: Array,
    required: true
  }
})

</script>


<template>
  <div class="catalog-tree-mask" ref="treeMask" @click="closeCatalogTree">
    <catalog-tree :style="treeStyle" :catalog="catalog"/>
  </div>
  <div>
    <catalog-tree-open @click="openCatalogTree"/>
  </div>
</template>


<style lang="scss" scoped>
@use '@/assets/style/mixin.scss' as _mixin;

.catalog-tree-mask {
  display: none;
  position: fixed;
  top: 60px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  transition: all var(--el-transition-duration) ease 0s;
  .catalog-tree-container {
    .custom-tree-node {
      @include _mixin.single-text;
    }
  }
}
</style>