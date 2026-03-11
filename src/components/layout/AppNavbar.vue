<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Toolbar from 'primevue/toolbar'
import Drawer from 'primevue/drawer'

const isMobileMenuOpen = ref(false)
const activeSection = ref('hero')
const isScrolled = ref(false)
let sectionObserver

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
  })
}

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'Skills', id: 'skills' },
  { label: 'Work', id: 'work' },
  { label: 'Clients', id: 'clients' },
]

const ctaItem = { label: 'Contact me', id: 'contact' }

const handleScroll = () => {
  isScrolled.value = window.scrollY > 16
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const onNavClick = (id) => {
  scrollTo(id)
  activeSection.value = id
  isMobileMenuOpen.value = false
}

const isActive = (id) => activeSection.value === id

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })

  const sections = navItems
    .concat([ctaItem])
    .map((item) => document.getElementById(item.id))
    .filter((section) => section !== null)

  sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visibleEntries.length > 0) {
        activeSection.value = visibleEntries[0].target.id
      }
    },
    {
      root: null,
      rootMargin: '-35% 0px -55% 0px',
      threshold: [0.1, 0.25, 0.5],
    },
  )

  sections.forEach((section) => sectionObserver.observe(section))
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)

  if (sectionObserver) {
    sectionObserver.disconnect()
  }
})
</script>

<template>
  <nav
    :class="[
      'fixed top-0 z-50 w-full py-[0.35rem] transition-[background-color,backdrop-filter,box-shadow] duration-300',
      isScrolled && 'bg-white/95 shadow-nav backdrop-blur-md',
    ]"
  >
    <Toolbar class="mx-auto max-w-6xl border-none bg-transparent px-4 py-3 md:px-8 md:py-4">
      <template #start>
        <button class="inline-flex items-center gap-2" @click="onNavClick('hero')">
          <span
            class="inline-flex h-7 w-7 items-center justify-center bg-accent text-[0.65rem] font-black text-white transition-transform duration-300 hover:rotate-12"
            >A</span
          >
          <span class="text-[0.9rem] font-bold text-ink md:text-[0.95rem]">Portfolio</span>
        </button>
      </template>

      <template #end>
        <div class="hidden items-center gap-7 md:flex">
          <button
            v-for="item in navItems"
            :key="item.id"
            class="group relative text-[0.86rem] font-medium tracking-[0.02em] text-ink"
            @click="onNavClick(item.id)"
          >
            {{ item.label }}
            <span
              :class="[
                'absolute -bottom-0.5 left-0 h-px bg-ink transition-all duration-300',
                isActive(item.id) ? 'w-full' : 'w-0 group-hover:w-full',
              ]"
            ></span>
          </button>

          <button
            class="group relative overflow-hidden border-[1.5px] border-ink px-[1.2rem] py-[0.56rem] text-[0.7rem] font-bold uppercase tracking-widest text-ink transition-colors duration-300 hover:text-white"
            @click="onNavClick(ctaItem.id)"
          >
            <span
              class="absolute inset-0 translate-y-full bg-ink transition-transform duration-300 group-hover:translate-y-0"
            ></span>
            <span class="relative z-10">{{ ctaItem.label }}</span>
          </button>
        </div>

        <button
          class="relative inline-flex h-10 w-10 items-center justify-center md:hidden"
          :aria-label="isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
          @click="toggleMobileMenu"
        >
          <span
            :class="[
              'absolute h-[1.5px] w-[1.15rem] bg-ink transition-[transform,opacity] duration-300',
              isMobileMenuOpen ? 'rotate-45' : '-translate-y-1.5',
            ]"
          ></span>
          <span
            :class="[
              'absolute h-[1.5px] w-[1.15rem] bg-ink transition-opacity duration-200',
              isMobileMenuOpen && 'opacity-0',
            ]"
          ></span>
          <span
            :class="[
              'absolute h-[1.5px] w-[1.15rem] bg-ink transition-[transform,opacity] duration-300',
              isMobileMenuOpen ? '-rotate-45' : 'translate-y-1.5',
            ]"
          ></span>
        </button>
      </template>
    </Toolbar>

    <Drawer
      v-model:visible="isMobileMenuOpen"
      header="Menu"
      position="right"
      class="w-[85vw] max-w-[20rem]"
    >
      <div class="flex flex-col gap-1.5 pt-2">
        <button
          v-for="item in navItems"
          :key="`mobile-${item.id}`"
          :class="[
            'group relative w-full border px-[0.85rem] py-3 text-left text-[0.9rem] font-medium text-ink transition-[background-color,border-color,transform] duration-200 active:translate-x-px',
            isActive(item.id)
              ? 'border-ink/12 bg-accent/8 font-bold'
              : 'border-transparent hover:border-ink/8 hover:bg-accent/6',
          ]"
          @click="onNavClick(item.id)"
        >
          <span
            :class="[
              'absolute bottom-2 left-0 top-2 w-0.75 bg-accent transition-transform duration-200',
              isActive(item.id) ? 'scale-y-100' : 'scale-y-0',
            ]"
          ></span>
          {{ item.label }}
        </button>

        <button
          class="group relative mt-2 w-full overflow-hidden border-[1.5px] border-ink px-[0.95rem] py-3 text-left text-[0.72rem] font-bold uppercase tracking-widest text-ink transition-colors duration-300 hover:text-white"
          @click="onNavClick(ctaItem.id)"
        >
          <span
            class="absolute inset-0 translate-y-full bg-ink transition-transform duration-300 group-hover:translate-y-0"
          ></span>
          <span class="relative z-10">{{ ctaItem.label }}</span>
        </button>
      </div>
    </Drawer>
  </nav>
</template>
