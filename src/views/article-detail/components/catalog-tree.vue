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
  },
  style: {
    type: Object,
    default: () => {
      return {
        height: '400px',
        overflow: 'auto',
        padding: '10px',
        position: 'sticky',
        top: '80px',
        borderLeft: '1px solid var(--el-border-color-lighter)',
      }
    }
  }
})

const defaultProps = {
  children: 'children',
  label: 'text',
}

</script>


<template>
  <div class="catalog-tree-container" :style="style">
    <el-tree
      class="catalog-tree"
      :props="defaultProps"
      :data="catalog"
      :highlight-current="true"
      :default-expand-all="true"
      @node-click="handleNodeClick"
    >
      <template #default="{node}">
        <div class="custom-tree-node">
          <span>{{ node.label }}</span>
        </div>
      </template>
    </el-tree>
  </div>
</template>


<style lang="scss" scoped>
</style>