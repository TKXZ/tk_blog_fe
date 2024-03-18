<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div style="height: 100%">
    <el-row justify="end" align="middle" style="height: 100%">
      <el-col :span="4" style="display: flex; align-items: center">
        <el-avatar
          class="avatar-image"
          icon="el-icon-user-solid"
          size="default"
          shape="circle"
          src="/images/avatar.jpg"
          fit="fill"
          style="margin-right: 20px"
        ></el-avatar>
        <el-dropdown>
          <el-button type="danger">
            <el-icon>
              <Icon icon="SwitchButton" />
            </el-icon>
            <el-icon class="el-icon--right">
              <Icon icon="ArrowDown" />
            </el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>切换账号</el-dropdown-item>
              <el-dropdown-item>退出系统</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped></style>
