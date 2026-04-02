<template>
  <a-config-provider :theme="antdTheme">
    <RouterView />
  </a-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { theme } from 'ant-design-vue'
import { useTheme } from '@/composables/useTheme'

const { isDark } = useTheme()

const antdTheme = computed(() => ({
  algorithm: isDark.value
    ? theme.darkAlgorithm
    : theme.defaultAlgorithm,
  token: {
    colorPrimary: '#f4c07a',
    borderRadius: 8,
  }
}))
</script>