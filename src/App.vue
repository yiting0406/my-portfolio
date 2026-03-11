<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AppNavbar from './components/layout/AppNavbar.vue'
import HeroSection from './components/sections/HeroSection.vue'
import MarqueeSection from './components/sections/MarqueeSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ClientsSection from './components/sections/ClientsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import FooterSection from './components/sections/FooterSection.vue'

const scrollProgress = ref(0)
const showBackToTop = ref(false)
const dotStyle = ref({ transform: 'translate(-50%, -50%)' })
const ringStyle = ref({ transform: 'translate(-50%, -50%)' })
const isCursorHover = ref(false)
const isDesktopCursor = ref(false)

let ringX = 0
let ringY = 0
let rafId = null

const updateScrollState = () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const maxScroll =
    document.documentElement.scrollHeight - document.documentElement.clientHeight || 1

  scrollProgress.value = Math.min(100, Math.max(0, (scrollTop / maxScroll) * 100))
  showBackToTop.value = scrollTop > 400
}

const animateRing = () => {
  const dotTransform = dotStyle.value.transform
  const match = /translate\((-?[\d.]+)px,\s*(-?[\d.]+)px\)/.exec(dotTransform)
  if (match) {
    const targetX = Number(match[1])
    const targetY = Number(match[2])
    ringX += (targetX - ringX) * 0.2
    ringY += (targetY - ringY) * 0.2
    ringStyle.value = { transform: `translate(${ringX}px, ${ringY}px)` }
  }
  rafId = window.requestAnimationFrame(animateRing)
}

const handleMouseMove = (event) => {
  const x = event.clientX
  const y = event.clientY
  dotStyle.value = { transform: `translate(${x}px, ${y}px)` }
}

const handlePointerOver = (event) => {
  const target = event.target
  if (!(target instanceof Element)) {
    return
  }

  isCursorHover.value = Boolean(
    target.closest('button, a, input, textarea, select, [role="button"]'),
  )
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  isDesktopCursor.value = window.matchMedia('(min-width: 1024px)').matches
  updateScrollState()
  window.addEventListener('scroll', updateScrollState, { passive: true })

  if (isDesktopCursor.value) {
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseover', handlePointerOver, { passive: true })
    rafId = window.requestAnimationFrame(animateRing)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrollState)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseover', handlePointerOver)

  if (rafId) {
    window.cancelAnimationFrame(rafId)
  }
})
</script>

<template>
  <div class="min-h-screen overflow-x-hidden bg-white text-ink lg:cursor-none lg:**:cursor-none">
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

    <AppNavbar />
    <main class="mx-auto max-w-6xl space-y-12 px-4 pb-0 pt-20 md:space-y-20 md:px-8 md:pt-24">
      <HeroSection />
      <MarqueeSection />

      <SkillsSection />

      <ProjectsSection />

      <ClientsSection />

      <ContactSection />
    </main>
    <FooterSection />

    <button
      :class="[
        'fixed bottom-4 right-4 z-900 inline-flex h-[2.8rem] w-[2.8rem] translate-y-3 items-center justify-center bg-ink text-base text-white opacity-0 transition-[opacity,transform,background-color] duration-300 hover:bg-accent md:bottom-8 md:right-8',
        showBackToTop && 'translate-y-0 opacity-100',
      ]"
      aria-label="Back to top"
      @click="scrollToTop"
    >
      ↑
    </button>
  </div>
</template>
