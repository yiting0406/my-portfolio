import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useAppChrome() {
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

  return {
    scrollProgress,
    showBackToTop,
    dotStyle,
    ringStyle,
    isCursorHover,
    isDesktopCursor,
    scrollToTop,
  }
}
