<script setup>
defineProps({
  scrollProgress: {
    type: Number,
    required: true,
  },
  showBackToTop: {
    type: Boolean,
    required: true,
  },
  dotStyle: {
    type: Object,
    required: true,
  },
  ringStyle: {
    type: Object,
    required: true,
  },
  isCursorHover: {
    type: Boolean,
    required: true,
  },
  isDesktopCursor: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['back-to-top'])
</script>

<template>
  <div
    class="fixed left-0 top-0 z-1200 h-0.75 bg-accent transition-[width] duration-100"
    :style="{ width: `${scrollProgress}%` }"
  ></div>

  <div
    v-if="isDesktopCursor"
    :class="[
      'pointer-events-none fixed left-0 top-0 z-1200 h-2.5 w-2.5 rounded-full bg-accent transition-[width,height] duration-200',
      isCursorHover && 'h-4.5 w-4.5',
    ]"
    :style="dotStyle"
  ></div>

  <div
    v-if="isDesktopCursor"
    :class="[
      'pointer-events-none fixed left-0 top-0 z-1200 -ml-4 -mt-4 h-8 w-8 rounded-full border-[1.5px] border-ink transition-[width,height,opacity] duration-200',
      isCursorHover && 'h-13.5 w-13.5 opacity-30',
    ]"
    :style="ringStyle"
  ></div>

  <button
    :class="[
      'fixed bottom-4 right-4 z-900 inline-flex h-[2.8rem] w-[2.8rem] translate-y-3 items-center justify-center bg-ink text-base text-white opacity-0 transition-[opacity,transform,background-color] duration-300 hover:bg-accent md:bottom-8 md:right-8',
      showBackToTop && 'translate-y-0 opacity-100',
    ]"
    aria-label="Back to top"
    @click="emit('back-to-top')"
  >
    ↑
  </button>
</template>
