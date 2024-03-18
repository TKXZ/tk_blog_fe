<script setup lang="ts">
import { onMounted, ref, unref } from 'vue'

const initTheme = localStorage.getItem('theme') === 'dark' ? true : false
const typeRef = ref<boolean>(initTheme)

/**
 * 更改主题
 */
const handleChangeTheme = (val: boolean) => {
  const $htmlEl = document.documentElement
  if (val) {
    $htmlEl.className = 'dark'
    typeRef.value = true
    localStorage.setItem('theme', 'dark')
  } else {
    $htmlEl.className = ''
    typeRef.value = false
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  handleChangeTheme(unref(typeRef))
})
</script>

<template>
  <div>
    <el-switch v-model="typeRef" @change="handleChangeTheme">
      <template #active-action>
        <span class="custom-active-action"
          ><el-icon size="12"><Icon icon="Moon" /></el-icon
        ></span>
      </template>
      <template #inactive-action>
        <span class="custom-inactive-action"
          ><el-icon size="12" color="#000"><Icon icon="Sunny" /></el-icon
        ></span>
      </template>
    </el-switch>
  </div>
</template>

<style lang="scss" scoped></style>
