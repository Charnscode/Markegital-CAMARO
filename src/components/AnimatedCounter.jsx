import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function AnimatedCounter({ value, suffix = '', duration = 2 }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  const target = parseFloat(value)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    const counter = { val: 0 }
    gsap.to(counter, {
      val: target,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent = Math.floor(counter.val) + suffix
        }
      },
    })
  }, [inView, target, suffix, duration])

  return <span ref={ref}>0{suffix}</span>
}
