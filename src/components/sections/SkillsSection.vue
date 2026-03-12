<script setup>
import { skills } from '../../data/portfolio'
</script>

<template>
  <section id="skills" class="section-shell">
    <div class="section-head">
      <p class="section-eyebrow">
        <span class="section-eyebrow-line"></span>
        Expertise
      </p>
      <h2 class="section-title">Skills & Services</h2>
    </div>

    <div class="grid gap-5 md:grid-cols-3">
      <article
        v-for="(skill, index) in skills"
        :key="skill.title"
        class="group card-surface card-surface-lift hover:border-warm"
      >
        <div class="relative mb-5 h-20 w-20 overflow-hidden">
          <img
            :src="skill.image"
            :alt="skill.title"
            class="h-full w-full object-cover transition group-hover:scale-110"
            loading="lazy"
          />
          <span
            class="absolute right-1 top-1 flex h-5 min-w-5 -translate-y-1.5 scale-95 items-center justify-center bg-accent px-1 text-[9px] font-black text-white opacity-0 animate-[badge-in_0.45s_ease_forwards]"
            :style="{ animationDelay: `${index * 110}ms` }"
          >
            {{ skill.badge }}
          </span>
        </div>
        <h3 class="mb-2 text-lg font-bold text-ink md:text-xl">{{ skill.title }}</h3>
        <p class="mb-4 text-sm leading-7 text-ink/55">{{ skill.description }}</p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in skill.tags"
            :key="`${skill.title}-${tag}`"
            class="border border-ink/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-ink/45 transition group-hover:border-accent/40 group-hover:text-accent"
          >
            {{ tag }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
