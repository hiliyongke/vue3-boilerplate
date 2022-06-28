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
import Result403Icon from '@/assets/icons/svg/assets-result-403.svg';
import Result404Icon from '@/assets/icons/svg/assets-result-404.svg';
import Result500Icon from '@/assets/icons/svg/assets-result-500.svg';
import ResultIeIcon from '@/assets/icons/svg/assets-result-ie.svg';
import ResultWifiIcon from '@/assets/icons/svg/assets-result-wifi.svg';
import ResultMaintenanceIcon from '@/assets/icons/svg/assets-result-maintenance.svg';

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
    min-height: 400px;
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }

  &-bg-img {
    width: 200px;
    color: var(--tdvns-brand-color);
  }

  &-title {
    font-style: normal;
    font-weight: 500;
    margin-top: 8px;
    color: var(--tdvns-text-color-primary);
    font-size: var(--tdvns-font-size-xl);
    line-height: var(--tdvns-text-line-height-xl);
  }

  &-tip {
    margin: 8px 0 32px;
    font-size: var(--tdvns-font-size-base);
    color: var(--tdvns-text-color-secondary);
    line-height: var(--tdvns-text-line-height-base);
  }
}
</style>
