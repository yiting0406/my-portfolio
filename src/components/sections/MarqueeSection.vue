<script setup>
import { marqueeItems } from '../../data/portfolio'

const repeatedItems = [...marqueeItems, ...marqueeItems]
</script>

<template>
  <section id="mq" class="overflow-hidden bg-ink py-3 md:py-4">
    <div
      class="flex w-max animate-[marquee_22s_linear_infinite] hover:[animation-play-state:paused]"
      aria-label="Technology highlights"
    >
      <template v-for="(item, index) in repeatedItems" :key="`${item}-${index}`">
        <p
          class="px-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/25 transition hover:text-white/70 md:px-6 md:text-[11px] md:tracking-[0.25em]"
        >
          {{ item }}
        </p>
        <span class="px-1 text-warm/40">•</span>
      </template>
    </div>
  </section>
</template>
