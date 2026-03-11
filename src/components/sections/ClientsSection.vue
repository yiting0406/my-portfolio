<script setup>
import { clients } from '../../data/portfolio'
</script>

<template>
  <section id="clients" class="section-shell">
    <div class="section-head">
      <p class="section-eyebrow">
        <span class="section-eyebrow-line"></span>
        Testimonials
      </p>
      <h2 class="section-title">What clients say</h2>
    </div>

    <div class="grid gap-5 md:grid-cols-3">
      <article
        v-for="client in clients"
        :key="client.name"
        class="card-surface card-surface-warm space-y-5 border-warm/40 bg-paper"
      >
        <p class="font-serif text-5xl leading-none text-warm">“</p>
        <p class="text-sm italic leading-7 text-ink/60">{{ client.quote }}</p>
        <div class="h-px w-9 bg-warm/55"></div>
        <div class="flex items-center gap-3">
          <img
            :src="client.avatar"
            :alt="client.name"
            class="h-11 w-11 rounded-full border border-warm/50 object-cover"
            loading="lazy"
          />
          <div>
            <p class="text-sm font-bold text-ink">{{ client.name }}</p>
            <p class="text-xs text-ink/40">{{ client.role }}</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
