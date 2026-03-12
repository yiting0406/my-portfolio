import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useReveal(options = {}) {
  const { threshold = 0.18, rootMargin = '0px 0px -10% 0px', baseDelay = 90, once = true } = options

  const elements = ref([])
  let observer = null

  const setRevealRef = (el, index = 0) => {
    if (!el) {
      return
    }

    el.style.setProperty('--reveal-delay', `${index * baseDelay}ms`)
    elements.value.push(el)
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            if (once && observer) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            entry.target.classList.remove('opacity-100', 'translate-y-0')
          }
        })
      },
      {
        threshold,
        rootMargin,
      },
    )

    elements.value.forEach((el) => observer.observe(el))
  })

  onBeforeUnmount(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
    elements.value = []
  })

  return {
    setRevealRef,
  }
}
