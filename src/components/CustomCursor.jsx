import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    let ringX = 0
    let ringY = 0
    let mouseX = 0
    let mouseY = 0

    const move = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
    }

    const onEnter = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea')) {
        ring.style.width = '54px'
        ring.style.height = '54px'
        ring.style.borderColor = 'rgba(244,180,0,0.9)'
        ring.style.background = 'rgba(244,180,0,0.08)'
      }
    }
    const onLeave = () => {
      ring.style.width = '34px'
      ring.style.height = '34px'
      ring.style.borderColor = 'rgba(244,180,0,0.5)'
      ring.style.background = 'transparent'
    }

    const raf = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      requestAnimationFrame(raf)
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseover', onEnter)
    document.addEventListener('mouseout', onLeave)
    const id = requestAnimationFrame(raf)

    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', onEnter)
      document.removeEventListener('mouseout', onLeave)
      cancelAnimationFrame(id)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
