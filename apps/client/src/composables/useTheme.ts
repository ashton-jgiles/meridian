import { ref, watch, computed } from 'vue'

type Phase = 'dawn' | 'midday' | 'golden' | 'night'

function getPhase(): Phase {
  const hour = new Date().getHours()
  if (hour >= 5  && hour < 10) return 'dawn'
  if (hour >= 10 && hour < 16) return 'midday'
  if (hour >= 16 && hour < 20) return 'golden'
  return 'night'
}

const isDark = ref(true)
const phase = ref<Phase>(getPhase())
const manualPhase = ref<Phase | null>(null)

const activePhase = computed(() => manualPhase.value ?? phase.value)

watch(activePhase, (p) => {
  document.documentElement.setAttribute('data-phase', p)
}, { immediate: true })

setInterval(() => { phase.value = getPhase() }, 60_000)

export function useTheme() {
  return { isDark, activePhase, manualPhase }
}