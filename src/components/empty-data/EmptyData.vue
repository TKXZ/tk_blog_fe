<script setup>
defineProps({
  description: {
    type: String,
    default: "空数据!"
  }
})
</script>


<template>
  <el-empty :description="description" />
</template>


<style lang="scss"></style>