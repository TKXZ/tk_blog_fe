<script setup lang="ts"></script>

<template>
  <div>
    <el-skeleton animated>
      <template #template>
        <el-skeleton-item variant="h3" style="width: 30%" />
        <div style="padding-left: 30px; width: 40%">
          <el-skeleton-item variant="text" />
          <el-skeleton-item variant="text" />
          <el-skeleton-item variant="text" />
        </div>
        <el-skeleton-item variant="p" style="margin-left: 30px; width: 20%" />
        <div style="padding-left: 70px; width: 30%">
          <el-skeleton-item variant="text" />
          <el-skeleton-item variant="text" />
          <el-skeleton-item variant="text" />
        </div>
        <el-skeleton-item variant="p" style="width: 30%" />
        <div style="padding-left: 30px; width: 50%">
          <el-skeleton-item variant="text" />
          <el-skeleton-item variant="text" />
          <el-skeleton-item variant="text" />
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<style lang="scss" scoped></style>
