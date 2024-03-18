<script setup lang="ts">
enum TagType {
  Primary = 'primary',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
}

/**
 * 随机获取 tag 类型
 */
const getRandomTagType = () => {
  const types = Object.values(TagType)
  return types[Math.floor(Math.random() * types.length)]
}

/**
 * 点击 tag
 */
const handleClickTag = () => {
  console.log('click tag')
}
</script>

<template>
  <div class="catagory-list-container">
    <el-tag :type="getRandomTagType()" @click="handleClickTag" class="list-item"
      >NodeJS</el-tag
    >
  </div>
</template>

<style lang="scss" scoped>
.catagory-list-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  .list-item {
    cursor: pointer;
  }
}
</style>
