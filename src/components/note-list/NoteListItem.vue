<script setup>
import { useRelativeTime } from '@/utils/date'
import { defineProps, toRefs } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  defaultClick: {
    type: Function,
    default: () => { console.log('NoteListItem clicked') }
  },
})

const { data } = toRefs(props)
</script>

<template>
  <div class="note-list-item" @click="props.defaultClick">
    <h2 class="item__title">{{ data.title }}</h2>
    <div class="item__desc">{{ data.desc }}</div>
    <div class="item__info-box">
      <el-row justify="end">
        <el-col class="time-box info-item" :xs="9" :sm="6" :md="6" :lg="6" :xl="3">
          <el-icon size="14" class="icon">
            <icon-ep-clock />
          </el-icon>
          <span class="item__time">发布时间:{{ useRelativeTime(data.publishTime) }}</span>
        </el-col>
        <el-col class="author-box info-item" :xs="9" :sm="6" :md="6" :lg="6" :xl="3">
          <el-icon size="14" class="icon">
            <icon-ep-user />
          </el-icon>
          <span class="item__author">作者:{{ data.author }}</span>
        </el-col>
      </el-row>
    </div>
  </div>
</template>


<style lang="scss">
@use '@/assets/style/mixin.scss' as _mixin;

.note-list-item {
  padding: $lg-space;
  border-radius: $sm-border-radius;
  box-shadow: $sm-box-shadow;
  transition: all .5s ease 0s;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: $md-box-shadow;
  }

  .item {
    &__title {
      font-size: $lg-font-size;
      margin-bottom: $md-space;
      letter-spacing: $sm-font-space;

      @include _mixin.single-text;
    }

    &__desc {
      color: $second-text-color;
      font-size: $sm-font-size;
      margin-bottom: $lg-space;

      @include _mixin.single-text;
    }

    &__info-box {
      font-size: $sm-font-size;
      color: $color-info;

      .info-item {
        display: flex;
        align-items: center;

        .icon {
          margin-right: $xs-space;
        }
      }
    }

    &__author {
      @include _mixin.single-text;
    }
  }
}
</style>