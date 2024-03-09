<script setup>
import { ref } from 'vue'

const type = ref(false)

/**
 * 更改主题
 */
const handleChangeTheme = (val) => {
  if (val === true) {
    document.documentElement.classList = 'dark'
  } else {
    document.documentElement.classList = ''
  }
}
</script>


<template>
  <div>
    <el-switch v-model="type" @change="handleChangeTheme">
      <template #active-action>
        <span class="custom-active-action"><el-icon size="12"><i-ep-moon /></el-icon></span>
      </template>
      <template #inactive-action>
        <span class="custom-inactive-action"><el-icon size="12"><i-ep-sunny color="#000" /></el-icon></span>
      </template>
    </el-switch>
  </div>
</template>


<style lang="scss" scoped></style>