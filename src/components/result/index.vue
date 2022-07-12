<template>
  <div class="result-container">
    <div class="result-bg-img">
      <component :is="dynamicComponent" />
    </div>
    <div class="result-title">{{ title }}</div>
    <div class="result-tip">{{ tip }}</div>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import Result403Icon from '@/assets/icons/assets-result-403.svg';
import Result404Icon from '@/assets/icons/assets-result-404.svg';
import Result500Icon from '@/assets/icons/assets-result-500.svg';
import ResultIeIcon from '@/assets/icons/assets-result-ie.svg';
import ResultWifiIcon from '@/assets/icons/assets-result-wifi.svg';
import ResultMaintenanceIcon from '@/assets/icons/assets-result-maintenance.svg';

const props = defineProps({
  bgUrl: String,
  title: String,
  tip: String,
  type: String
});

const dynamicComponent = computed(() => {
  switch (props.type) {
    case '403':
      return Result403Icon;
    case '404':
      return Result404Icon;
    case '500':
      return Result500Icon;
    case 'ie':
      return ResultIeIcon;
    case 'wifi':
      return ResultWifiIcon;
    case 'maintenance':
      return ResultMaintenanceIcon;
    default:
      return Result403Icon;
  }
});
</script>
<style lang="less" scoped>
@import '@/style/variables';
.result {
  &-link {
    color: var(--tdvns-brand-color);
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: var(--tdvns-brand-color);
    }
    &:active {
      color: var(--tdvns-brand-color);
    }
    &--active {
      color: var(--tdvns-brand-color);
    }
    &:focus {
      text-decoration: none;
    }
  }
  &-container {
    display: flex;
    height: 75vh;
    min-height: 400px;
    padding: 24px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &-bg-img {
    width: 200px;
    color: var(--tdvns-brand-color);
  }
  &-title {
    margin-top: 8px;
    font-size: var(--tdvns-font-size-xl);
    font-style: normal;
    font-weight: 500;
    line-height: var(--tdvns-text-line-height-xl);
    color: var(--tdvns-text-color-primary);
  }
  &-tip {
    margin: 8px 0 32px;
    font-size: var(--tdvns-font-size-base);
    line-height: var(--tdvns-text-line-height-base);
    color: var(--tdvns-text-color-secondary);
  }
}
</style>
