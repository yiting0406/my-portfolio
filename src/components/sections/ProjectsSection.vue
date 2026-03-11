<script setup>
import { ref, computed } from 'vue'
import Tag from 'primevue/tag'
import Button from 'primevue/button'
import { projects } from '../../data/portfolio'

const activeFilter = ref('All')
const visibleCount = ref(3)
const selectedProject = ref(null)

const filterTabs = computed(() => ['All', ...new Set(projects.map((project) => project.category))])

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') {
    return projects
  }
  return projects.filter((project) => project.category === activeFilter.value)
})

const displayedProjects = computed(() => filteredProjects.value.slice(0, visibleCount.value))

const hasMore = computed(() => visibleCount.value < filteredProjects.value.length)

const applyFilter = (filter) => {
  activeFilter.value = filter
  visibleCount.value = 3
}

const toggleLoadMore = () => {
  if (hasMore.value) {
    visibleCount.value += 3
  } else {
    visibleCount.value = 3
  }
}

const openProject = (project) => {
  selectedProject.value = project
}

const closeProject = () => {
  selectedProject.value = null
}
</script>

<template>
  <section id="work" class="section-shell">
    <div class="section-head">
      <p class="section-eyebrow">
        <span class="section-eyebrow-line"></span>
        Selected Work
      </p>
      <h2 class="section-title">Featured Projects</h2>
    </div>

    <div class="flex flex-wrap gap-2">
      <button
        v-for="filter in filterTabs"
        :key="filter"
        :class="[
          'border-[1.5px] px-[0.95rem] py-[0.45rem] text-[0.68rem] font-bold uppercase tracking-[0.12em] transition-[border-color,color,background-color] duration-200',
          activeFilter === filter
            ? 'border-ink bg-ink text-white'
            : 'border-ink/15 text-ink/45 hover:border-ink hover:text-ink',
        ]"
        @click="applyFilter(filter)"
      >
        {{ filter }}
      </button>
    </div>

    <div class="grid gap-5 md:grid-cols-3">
      <article
        v-for="project in displayedProjects"
        :key="project.title"
        class="group overflow-hidden"
      >
        <button
          class="relative aspect-square w-full overflow-hidden text-left"
          @click="openProject(project)"
        >
          <img
            :src="project.image"
            :alt="`${project.title} preview`"
            class="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div
            class="absolute inset-0 flex items-center justify-center bg-ink/0 transition group-hover:bg-ink/60"
          >
            <span
              class="translate-y-2 text-xs font-bold uppercase tracking-[0.15em] text-white opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"
            >
              View Project →
            </span>
          </div>
          <span
            class="absolute left-3 top-3 bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-ink"
          >
            {{ project.category }}
          </span>
        </button>

        <div class="space-y-3 pt-3">
          <h3 class="text-lg font-bold text-ink">{{ project.title }}</h3>
          <p class="text-xs font-medium text-ink/45">{{ project.subtitle }}</p>
          <p class="text-sm leading-7 text-ink/60">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 pb-2">
            <Tag
              v-for="item in project.stack"
              :key="`${project.title}-${item}`"
              :value="item"
              severity="secondary"
            />
          </div>
          <div class="grid grid-cols-1 gap-2 sm:flex sm:flex-wrap">
            <Button
              v-if="project.liveUrl"
              as="a"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              label="Live Demo"
              size="small"
              class="w-full sm:w-auto"
            />
            <Button
              v-if="project.repoUrl"
              as="a"
              :href="project.repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              label="Source"
              severity="secondary"
              outlined
              size="small"
              class="w-full sm:w-auto"
            />
          </div>
        </div>
      </article>
    </div>

    <div class="flex justify-center">
      <button
        v-if="filteredProjects.length > 3"
        class="border-[1.5px] border-ink px-[1.6rem] py-[0.7rem] text-[0.72rem] font-bold uppercase tracking-[0.12em] transition-colors duration-200 hover:bg-ink hover:text-white"
        @click="toggleLoadMore"
      >
        {{ hasMore ? 'Load More' : 'Show Less' }}
      </button>
    </div>

    <div
      :class="[
        'fixed inset-0 z-1000 flex items-center justify-center bg-black/75 p-5 backdrop-blur-[7px] transition-opacity duration-300',
        selectedProject ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
      ]"
      @click.self="closeProject"
    >
      <article
        :class="[
          'max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-white transition-transform duration-300',
          selectedProject ? 'scale-100' : 'scale-95',
        ]"
      >
        <div v-if="selectedProject" class="relative">
          <img
            :src="selectedProject.image"
            :alt="selectedProject.title"
            class="h-60 w-full object-cover md:h-70"
            loading="lazy"
          />
          <button
            class="absolute right-3 top-3 h-[2.2rem] w-[2.2rem] bg-white/90 text-base font-bold transition-colors duration-200 hover:bg-ink hover:text-white"
            aria-label="Close project modal"
            @click="closeProject"
          >
            ×
          </button>
        </div>
        <div v-if="selectedProject" class="space-y-4 p-[1.4rem] md:p-8">
          <p class="text-xs font-bold uppercase tracking-[0.15em] text-accent">
            {{ selectedProject.category }}
          </p>
          <h3 class="font-serif text-3xl text-ink">{{ selectedProject.title }}</h3>
          <p class="text-sm leading-7 text-ink/65">{{ selectedProject.detail }}</p>
          <div class="flex flex-wrap gap-2">
            <Tag
              v-for="item in selectedProject.stack"
              :key="`${selectedProject.title}-${item}-modal`"
              :value="item"
              severity="secondary"
            />
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
