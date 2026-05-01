import { useEffect, useRef, useState } from 'react'

/**
 * Counts a number up from 0 to `target` once the element is in view.
 * Returns a [ref, value] tuple — attach the ref to whatever should
 * trigger the count when scrolled into view.
 */
export function useCountUp(target: number, durationMs = 1400) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (started.current) return
        for (const e of entries) {
          if (!e.isIntersecting) continue
          started.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / durationMs)
            const eased = 1 - Math.pow(1 - t, 3) // ease-out cubic
            setValue(Math.round(target * eased))
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, durationMs])

  return { ref, value }
}
