<script setup lang="js">

/**
 * 点击目录项
 */
const handleNodeClick = (e) => {
  const $t = document.getElementById(e.text);
  // $t.scrollIntoView(true, { behavior: "smooth" });

  window.scrollTo({top: $t.offsetTop, behavior: 'smooth'})
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
  <div class="catalog-tree-container">
    <el-tree
    style="max-width: 500px; overflow: auto;"
    :data="catalog"
    :props="defaultProps"
    :highlight-current="true"
    :default-expand-all="true"
    @node-click="handleNodeClick"
  />

  </div>
</template>


<style lang="scss" scoped>
.catalog-tree-container {
  height: 400px;
  overflow: auto;
  padding: 10px;
  position: sticky;
  top: 80px;
  border-left: 1px solid #e0e0e0;
}
</style>