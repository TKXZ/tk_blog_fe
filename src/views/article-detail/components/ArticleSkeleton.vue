<script setup lang="ts"></script>

<template>
  <div class="article-skeleton-container">
    <el-skeleton animated>
      <template #template>
        <el-skeleton-item
          variant="h1"
          style="width: 40%; height: 30px; margin-bottom: 30px"
        />
        <div>
          <el-skeleton-item variant="p" />
          <el-skeleton-item variant="p" />
          <el-skeleton-item variant="p" />
        </div>
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px 0;
          "
        >
          <el-skeleton-item variant="image" style="width: 50%; height: 200px" />
        </div>
        <div>
          <el-skeleton-item variant="p" />
          <el-skeleton-item variant="p" />
        </div>
      </template>
    </el-skeleton>
  </div>
</template>

<style lang="scss" scoped></style>
