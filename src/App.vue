<script setup>
import AppNavbar from './components/layout/AppNavbar.vue'
import AppChromeOverlay from './components/layout/AppChromeOverlay.vue'
import HeroSection from './components/sections/HeroSection.vue'
import MarqueeSection from './components/sections/MarqueeSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ClientsSection from './components/sections/ClientsSection.vue'
import ContactSection from './components/sections/ContactSection.vue'
import FooterSection from './components/sections/FooterSection.vue'
import { useAppChrome } from './composables/useAppChrome'

const {
  scrollProgress,
  showBackToTop,
  dotStyle,
  ringStyle,
  isCursorHover,
  isDesktopCursor,
  scrollToTop,
} = useAppChrome()
</script>

<template>
  <div class="min-h-screen overflow-x-hidden bg-white text-ink lg:cursor-none lg:**:cursor-none">
    <AppChromeOverlay
      :scroll-progress="scrollProgress"
      :show-back-to-top="showBackToTop"
      :dot-style="dotStyle"
      :ring-style="ringStyle"
      :is-cursor-hover="isCursorHover"
      :is-desktop-cursor="isDesktopCursor"
      @back-to-top="scrollToTop"
    />

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
  </div>
</template>
