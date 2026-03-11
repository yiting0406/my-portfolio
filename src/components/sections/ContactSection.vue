<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import { contactContent } from '../../data/portfolio'

const form = ref({
  name: '',
  email: '',
  type: 'Website',
  message: '',
})

const isSubmitting = ref(false)
const showToast = ref(false)

const submitForm = async () => {
  if (isSubmitting.value) {
    return
  }

  isSubmitting.value = true

  await new Promise((resolve) => window.setTimeout(resolve, 1200))

  isSubmitting.value = false
  showToast.value = true
  form.value = {
    name: '',
    email: '',
    type: 'Website',
    message: '',
  }

  window.setTimeout(() => {
    showToast.value = false
  }, 2200)
}
</script>

<template>
  <section
    id="contact"
    class="relative overflow-hidden bg-ink px-4 py-12 text-white sm:px-6 md:px-10 md:py-20"
  >
    <div
      class="pointer-events-none absolute right-0 top-0 h-96 w-96 bg-radial-[at_top_right] from-warm/10 to-transparent"
    ></div>
    <div class="relative grid gap-10 md:grid-cols-2">
      <div class="space-y-5 md:space-y-6">
        <p class="section-eyebrow-warm">
          <span class="section-eyebrow-line-warm"></span>
          Contact
        </p>
        <h2 class="section-title-inverse">{{ contactContent.title }}</h2>
        <p class="max-w-md text-sm leading-7 text-white/50 md:leading-8">
          {{ contactContent.description }}
        </p>
        <div class="space-y-3 border-t border-white/10 pt-6 text-sm">
          <div class="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <p class="w-20 text-[10px] font-bold uppercase tracking-[0.15em] text-warm">Email</p>
            <p class="break-all text-white/60">{{ contactContent.email }}</p>
          </div>
          <div class="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <p class="w-20 text-[10px] font-bold uppercase tracking-[0.15em] text-warm">Phone</p>
            <p class="text-white/60">{{ contactContent.phone }}</p>
          </div>
          <div class="flex flex-col gap-1 sm:flex-row sm:gap-4">
            <p class="w-20 text-[10px] font-bold uppercase tracking-[0.15em] text-warm">Based</p>
            <p class="text-white/60">{{ contactContent.location }}</p>
          </div>
        </div>
      </div>

      <form
        class="card-surface space-y-4 rounded-none border-white/10 bg-white/5 p-4 sm:p-5 md:p-6"
        @submit.prevent="submitForm"
      >
        <div class="grid gap-4 sm:grid-cols-2">
          <label class="space-y-2 text-xs uppercase tracking-[0.12em] text-white/50">
            Name
            <input
              v-model="form.name"
              type="text"
              placeholder="Your name"
              class="h-11 w-full border border-white/15 bg-white/5 px-3 py-3 text-sm text-white outline-none transition focus:border-warm/60"
            />
          </label>
          <label class="space-y-2 text-xs uppercase tracking-[0.12em] text-white/50">
            Email
            <input
              v-model="form.email"
              type="email"
              placeholder="you@example.com"
              class="h-11 w-full border border-white/15 bg-white/5 px-3 py-3 text-sm text-white outline-none transition focus:border-warm/60"
            />
          </label>
        </div>

        <label class="space-y-2 text-xs uppercase tracking-[0.12em] text-white/50">
          Project Type
          <select
            v-model="form.type"
            class="h-11 w-full border border-white/15 bg-white/5 px-3 py-3 text-sm text-white outline-none transition focus:border-warm/60"
          >
            <option class="text-ink">Website</option>
            <option class="text-ink">Dashboard</option>
            <option class="text-ink">UI Audit</option>
          </select>
        </label>

        <label class="space-y-2 text-xs uppercase tracking-[0.12em] text-white/50">
          Message
          <textarea
            v-model="form.message"
            rows="4"
            placeholder="Tell me about your project"
            class="w-full resize-none border border-white/15 bg-white/5 px-3 py-3 text-sm text-white outline-none transition focus:border-warm/60"
          ></textarea>
        </label>

        <Button
          :label="isSubmitting ? 'Sending...' : 'Send message'"
          :disabled="isSubmitting"
          type="submit"
          class="w-full border border-white/20 bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-[0.15em]"
        />
      </form>
    </div>

    <div
      :class="[
        'fixed bottom-4 right-4 z-1100 border-l-[3px] border-l-accent bg-ink px-4 py-[0.85rem] text-[0.82rem] text-white transition-transform duration-300 md:bottom-8 md:right-8',
        showToast ? 'translate-y-0' : 'translate-y-[130%]',
      ]"
    >
      Message sent. I will get back to you soon.
    </div>
  </section>
</template>
