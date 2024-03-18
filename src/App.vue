<script setup lang="ts">
import { nextTick, onMounted } from 'vue'
import { closeLoading } from './utils/loading'

onMounted(() => {
  nextTick(() => {
    closeLoading()
  })
})
</script>

<template>
  <div class="common-layout">
    <router-view name="client"></router-view>
    <router-view name="system"></router-view>
  </div>
  <back-top></back-top>
</template>

<style lang="scss" scoped></style>
