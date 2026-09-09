import { useEffect, useRef } from 'react'

/**
 * Adds a restrained vertical drift while preserving the page's natural scroll.
 */
export function useParallax<T extends HTMLElement>(speed = 0.32, maxOffset = 160) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const initialTransform = el.style.transform
    let rafId: number | null = null
    let currentOffset = 0
    let isInitialFrame = true

    const reset = () => {
      el.style.transform = initialTransform
    }

    const update = () => {
      rafId = null

      if (reducedMotion.matches) {
        currentOffset = 0
        isInitialFrame = true
        reset()
        return
      }

      const rect = el.getBoundingClientRect()
      const naturalCentre = rect.top - currentOffset + rect.height / 2
      const viewportCentre = window.innerHeight / 2
      const rawOffset = (viewportCentre - naturalCentre) * speed
      const targetOffset = Math.max(-maxOffset, Math.min(maxOffset, rawOffset))

      if (isInitialFrame) {
        currentOffset = targetOffset
        isInitialFrame = false
      } else {
        currentOffset += (targetOffset - currentOffset) * 0.14
      }

      el.style.transform = `translate3d(0, ${currentOffset.toFixed(2)}px, 0)`

      if (Math.abs(targetOffset - currentOffset) > 0.05) {
        rafId = requestAnimationFrame(update)
      }
    }

    const requestUpdate = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(update)
      }
    }

    requestUpdate()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    reducedMotion.addEventListener('change', requestUpdate)

    return () => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
      reducedMotion.removeEventListener('change', requestUpdate)

      if (rafId !== null) {
        cancelAnimationFrame(rafId)
      }

      reset()
    }
  }, [maxOffset, speed])

  return ref
}
