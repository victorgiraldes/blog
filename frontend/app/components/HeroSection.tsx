'use client'

import {useLanguage} from '@/app/context/LanguageContext'
import {useRef, useCallback} from 'react'

export default function HeroSection() {
  const {t} = useLanguage()
  const containerRef = useRef<HTMLDivElement>(null)
  const spotlightRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    const el = spotlightRef.current
    if (!rect || !el) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.opacity = '1'
    el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(205,234,25,0.13) 0%, rgba(205,234,25,0.05) 40%, transparent 65%)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (spotlightRef.current) spotlightRef.current.style.opacity = '0'
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative bg-gray-950 overflow-hidden"
    >
      {/* Tile pattern */}
      <div className="absolute inset-0 bg-[url(/images/tile-1-black.png)] bg-size-[5px] opacity-30" />

      {/* Spotlight — atualizado via DOM, sem re-renders */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute inset-0"
        style={{opacity: 0, transition: 'opacity 0.4s ease'}}
      />

      <div className="container">
        <div className="relative min-h-[50vh] mx-auto max-w-2xl pt-16 xl:pt-24 pb-20 lg:max-w-4xl lg:px-12 flex flex-col justify-center">
          <span className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4">
            {t.hero.role}
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            Victor Giraldes
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 font-light max-w-xl leading-relaxed">
            {t.hero.bio}
          </p>
        </div>
      </div>
    </div>
  )
}
