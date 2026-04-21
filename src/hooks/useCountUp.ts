import { useEffect, useRef, useState } from 'react'

type Opts = {
  duration?: number
  start?: boolean
}

export function useCountUp(target: number, { duration = 1600, start = true }: Opts = {}) {
  const [value, setValue] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!start) return
    const t0 = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration)
      // easeOutQuart
      const eased = 1 - Math.pow(1 - p, 4)
      setValue(Math.round(target * eased))
      if (p < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [target, duration, start])

  return value
}
