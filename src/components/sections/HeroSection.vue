<script setup>
import Button from 'primevue/button'
import { heroContent } from '../../data/portfolio'
import { useReveal } from '../../composables/useReveal'

const { setRevealRef } = useReveal({
  baseDelay: 120,
  threshold: 0.2,
  rootMargin: '0px 0px -10% 0px',
})

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
  })
}
</script>

<template>
  <section id="hero" class="relative overflow-hidden pt-6 md:pt-14">
    <div
      class="pointer-events-none absolute -left-20 top-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(232,85,62,0.16)_0%,rgba(232,85,62,0)_70%)] blur-[2px] animate-[float-blob_8s_ease-in-out_infinite]"
    ></div>
    <div
      class="pointer-events-none absolute -right-16 bottom-4 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(255,210,133,0.25)_0%,rgba(255,210,133,0)_70%)] blur-[2px] animate-[float-blob_8s_ease-in-out_infinite] [animation-delay:1.1s]"
    ></div>
    <div
      class="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]"
      style="background-size: 60px 60px"
    ></div>
    <div class="relative grid gap-8 md:grid-cols-[1fr_460px] md:items-center md:gap-10">
      <div class="space-y-6 md:space-y-7">
        <p
          :ref="(el) => setRevealRef(el, 0)"
          class="section-eyebrow translate-y-6 opacity-0 transition duration-700 ease-out"
          :style="{ transitionDelay: 'var(--reveal-delay,0ms)' }"
        >
          <span class="section-eyebrow-line"></span>
          {{ heroContent.eyebrow }}
        </p>
        <h1
          :ref="(el) => setRevealRef(el, 1)"
          class="section-title translate-y-6 text-4xl! leading-[0.95] opacity-0 transition duration-700 ease-out sm:text-5xl! md:text-7xl!"
          :style="{ transitionDelay: 'var(--reveal-delay,0ms)' }"
        >
          {{ heroContent.titleTop }}
          <span class="block text-accent">{{ heroContent.titleAccent }}</span>
        </h1>
        <p
          :ref="(el) => setRevealRef(el, 2)"
          class="max-w-xl translate-y-6 text-sm leading-7 text-ink/60 opacity-0 transition duration-700 ease-out md:text-[15px] md:leading-8"
          :style="{ transitionDelay: 'var(--reveal-delay,0ms)' }"
        >
          {{ heroContent.description }}
        </p>
        <div
          :ref="(el) => setRevealRef(el, 3)"
          class="grid translate-y-6 grid-cols-1 gap-3 opacity-0 transition duration-700 ease-out sm:flex sm:flex-wrap"
          :style="{ transitionDelay: 'var(--reveal-delay,0ms)' }"
        >
          <Button
            label="View Work"
            class="w-full border-none bg-ink px-7 py-3 text-xs font-bold uppercase tracking-[0.12em] sm:w-auto"
            @click="scrollTo('work')"
          />
          <Button
            label="Contact Me"
            outlined
            class="w-full border-ink px-7 py-3 text-xs font-bold uppercase tracking-[0.12em] text-ink sm:w-auto"
            @click="scrollTo('contact')"
          />
        </div>

        <div
          :ref="(el) => setRevealRef(el, 4)"
          class="grid translate-y-6 grid-cols-1 gap-4 border-t border-ink/10 pt-5 opacity-0 transition duration-700 ease-out sm:grid-cols-3"
          :style="{ transitionDelay: 'var(--reveal-delay,0ms)' }"
        >
          <div v-for="metric in heroContent.metrics" :key="metric.label">
            <p class="text-3xl font-extrabold text-ink">{{ metric.value }}</p>
            <p class="mt-1 text-[11px] uppercase tracking-[0.12em] text-ink/45">
              {{ metric.label }}
            </p>
          </div>
        </div>
      </div>

      <div
        :ref="(el) => setRevealRef(el, 5)"
        class="relative translate-y-6 opacity-0 transition duration-700 ease-out"
        :style="{ transitionDelay: 'var(--reveal-delay,0ms)' }"
      >
        <div
          class="pointer-events-none absolute -right-3 -top-3 h-full w-full border-2 border-warm"
        ></div>
        <img
          :src="heroContent.profileImage"
          alt="Portrait"
          class="h-80 w-full object-cover sm:h-96"
          loading="lazy"
        />
        <div
          class="absolute bottom-4 left-4 border-l-4 border-accent bg-white/90 px-3 py-2 backdrop-blur-sm md:bottom-5 md:left-5 md:px-4 md:py-3"
        >
          <p class="text-[10px] font-bold uppercase tracking-[0.15em] text-ink/40">
            {{ heroContent.badgeTitle }}
          </p>
          <p class="mt-1 text-sm font-bold text-ink">{{ heroContent.badgeSubtitle }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
