import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { useRef, useState, useCallback } from 'react'

export default function Hero() {
  const splineRef = useRef(null)
  const headRef = useRef(null)
  const [headTurned, setHeadTurned] = useState(false)
  const animRef = useRef(null)

  const tweenRotationY = useCallback((object, toY, duration = 600) => {
    if (!object) return
    if (animRef.current) cancelAnimationFrame(animRef.current)
    const fromY = object.rotation?.y || 0
    const start = performance.now()

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      // easeInOutCubic
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      const y = fromY + (toY - fromY) * eased
      if (object.rotation) object.rotation.y = y
      if (t < 1) {
        animRef.current = requestAnimationFrame(tick)
      }
    }

    animRef.current = requestAnimationFrame(tick)
  }, [])

  const onLoad = useCallback((splineApp) => {
    splineRef.current = splineApp
    // Try common head object names in the Spline human rig
    const candidates = ['Head', 'head', 'Neck', 'neck', 'HeadCtrl', 'Head_Control']
    let found = null
    for (const name of candidates) {
      try {
        const obj = splineApp.findObjectByName?.(name)
        if (obj) {
          found = obj
          break
        }
      } catch (_) {}
    }
    headRef.current = found
  }, [])

  const handleClick = useCallback(() => {
    const head = headRef.current
    // If no head found, try emitting a click event so any Spline logic listens
    if (!head && splineRef.current?.emitEvent) {
      try {
        splineRef.current.emitEvent('mouseDown')
      } catch (_) {}
      return
    }

    const targetY = headTurned ? 0 : 0.5 // radians ~ 28.6°
    tweenRotationY(head, targetY, 650)
    setHeadTurned((v) => !v)
  }, [headTurned, tweenRotationY])

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        {/* Replaced with a 3D human scene that includes built-in idle animation */}
        <Spline
          scene="https://prod.spline.design/kbIYtWl7zS5uIcfH/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
          onLoad={onLoad}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/30 to-white/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-24 grid lg:grid-cols-2 items-center gap-10">
        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
          <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">Software Engineer • Tech Lead</p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-black leading-tight text-gray-900">
            Reza Julian
          </h1>
          <p className="mt-5 text-gray-700 text-lg leading-relaxed">
            7+ years building web and mobile products, 4+ years leading teams. Full‑stack specialist across React, Vue, Angular, Node, Go, PHP, and cloud‑native architectures.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors">Get in touch</a>
            <a href="#about" className="px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50">View profile</a>
          </div>

          <div className="mt-8 text-sm text-gray-600">
            Tangerang, Indonesia • 085718517795 • rhezajulian@gmail.com
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="hidden lg:block" />
      </div>

      {/* Click catcher for head turn interaction */}
      <button
        aria-label="Turn head"
        onClick={handleClick}
        className="absolute inset-0 z-10 cursor-pointer bg-transparent"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      />

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }} className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-600">
        Tap to make eye contact
        <div className="mx-auto mt-2 h-8 w-[2px] bg-gradient-to-b from-gray-400 to-transparent rounded-full" />
      </motion.div>
    </section>
  )
}
