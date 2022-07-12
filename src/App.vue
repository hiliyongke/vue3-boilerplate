<template>
  <router-view :class="[mode]" />
</template>
<script setup lang="ts">
import config from '@/config/style';
import { useSettingStore } from '@/store';

const store = useSettingStore(),
  mode = computed(() => {
    return store.displayMode;
  });

onMounted(() => {
  store.updateConfig({ ...config });
});
</script>
<style lang="less" scoped>
@import '@/style/variables.less';
#nprogress .bar {
  background: var(--tdvns-brand-color) !important;
}
</style>
