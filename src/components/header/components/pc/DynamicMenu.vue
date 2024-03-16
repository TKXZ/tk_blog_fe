<script setup lang="ts">
import type { DynamicMenuPropsRecord } from './@types'

defineProps<DynamicMenuPropsRecord>()
</script>

<template>
  <template v-for="item in menuArr" :key="item.id">
    <el-menu-item
      v-if="!item.children || item.children.length === 0"
      :index="item.path"
    >
      <template #title>
        <el-icon size="18"><Icon :icon="item.icon" /></el-icon>
        <span v-if="!item.href">{{ item.text }}</span>
        <a :href="item.href" style="width: 100%" v-else>{{ item.text }}</a>
      </template>
    </el-menu-item>
    <el-sub-menu v-else :index="item.path">
      <template #title>
        <el-icon size="18"><Icon :icon="item.icon" /></el-icon>
        <span v-if="!item.href">{{ item.text }}</span>
        <a :href="item.href" style="width: 100%" v-else>{{ item.text }}</a>
      </template>
      <dynamic-menu :menu-arr="item.children" />
    </el-sub-menu>
  </template>
</template>

<style lang="scss" scoped></style>
