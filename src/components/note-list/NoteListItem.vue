<script setup lang="ts">
import { useRelativeTime } from '@/utils/date'
import { toRefs } from 'vue'
import { getDefaultNoteListItemProps } from './data'
import { NoteListItemPropRecord } from './@types'

const props = withDefaults(
  defineProps<NoteListItemPropRecord>(),
  getDefaultNoteListItemProps(),
)

const { data: dataRef } = toRefs(props)
</script>

<template>
  <div class="note-list-item" @click="props.defaultClick">
    <h2 class="item__title">{{ dataRef.title }}</h2>
    <div class="item__desc">{{ dataRef.desc }}</div>
    <div class="item__info-box">
      <el-row justify="end">
        <el-col
          class="time-box info-item"
          :xs="9"
          :sm="6"
          :md="6"
          :lg="6"
          :xl="4"
        >
          <el-icon size="14" class="icon">
            <Icon icon="Clock" />
          </el-icon>
          <span class="item__time item__info-text"
            >发布时间:{{ useRelativeTime(dataRef.createdAt) }}</span
          >
        </el-col>
        <el-col
          class="author-box info-item"
          :xs="9"
          :sm="6"
          :md="6"
          :lg="6"
          :xl="4"
        >
          <el-icon size="14" class="icon">
            <Icon icon="User" />
          </el-icon>
          <span class="item__author item__info-text"
            >作者:{{ dataRef.author }}</span
          >
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style lang="scss">
@use '@/assets/style/mixin.scss' as _mixin;

.note-list-item {
  box-sizing: border-box;
  padding: $lg-space;
  border-radius: var(--el-border-radius-base);
  box-shadow: var(--el-box-shadow-lighter);
  transition: all 0.5s ease 0s;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: var(--el-box-shadow-light);
  }

  .item {
    &__title {
      font-size: var(--el-font-size-extra-large);
      margin-bottom: $md-space;
      letter-spacing: $sm-font-space;

      @include _mixin.single-text;
    }

    &__desc {
      color: var(--el-text-color-secondary);
      font-size: var(--el-font-size-extra-small);
      margin-bottom: $lg-space;

      @include _mixin.single-text;
    }

    &__info-box {
      font-size: var(--el-font-size-extra-small);
      color: var(--el-color-info-dark-2);

      .info-item {
        display: flex;
        align-items: center;

        .icon {
          margin-right: $xs-space;
        }
      }
    }

    &__info-text {
      @include _mixin.single-text;
    }
  }
}
</style>
