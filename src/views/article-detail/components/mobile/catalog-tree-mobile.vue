<script setup>
import { defineProps, ref } from 'vue';
import catalogTreeOpen from './catalog-tree-open.vue';

const treeMask = ref(null);
const tree = ref(null);

/**
 * 点击目录项
 */
const handleNodeClick = (e) => {
  const $t = document.getElementById(e.text);
  // $t.scrollIntoView(true, { behavior: "smooth" });

  window.scrollTo({top: $t.offsetTop, behavior: 'smooth'})
  closeCatalogTree();
}

/**
 * 关闭目录树
 */
const closeCatalogTree = () => {
  const $treeMask = treeMask.value;
  const $tree = tree.value;

  $treeMask.style.background = 'transparent';
  setTimeout(() => {
    $treeMask.style.display = 'none';
  }, 300)

  $tree.style.right = `-${$tree.offsetWidth}px`
}

const openCatalogTree = () => {
  const $treeMask = treeMask.value;
  const $tree = tree.value;

  $treeMask.style.background = '#0000001f';
  $treeMask.style.display = 'block';
  setTimeout(() => {
    $tree.style.right = '0px'
  })
}

defineProps({
  catalog: {
    type: Array,
    required: true
  }
})

const defaultProps = {
  children: 'children',
  label: 'text',
}
</script>


<template>
  <div class="catalog-tree-mask" ref="treeMask" @click="closeCatalogTree">
    <div class="catalog-tree-container" ref="tree">
      <el-tree
      style="overflow: auto;"
      :data="catalog"
      :props="defaultProps"
      :highlight-current="true"
      :default-expand-all="true"
      @node-click="handleNodeClick"
    />
    </div>
  </div>
  <div>
    <catalog-tree-open @click="openCatalogTree"/>
  </div>
</template>


<style lang="scss" scoped>
.catalog-tree-mask {
  display: none;
  position: fixed;
  top: 60px;
  right: 0;
  bottom: 0;
  left: 0;
  background: #0000001f;
  z-index: 999;
  transition: all .3s ease 0s;
  .catalog-tree-container {
    position: fixed;
    right: 0;
    top: 60px;
    bottom: 0;
    max-width: 60%;
    height: 100%;
    overflow: scroll;
    box-sizing: border-box;
    padding: 10px 0;
    background-color: #fff;
    transition: right .5s ease 0s;
  }
}
</style>