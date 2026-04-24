'use client'

import Link from 'next/link'
import {useLanguage} from '@/app/context/LanguageContext'
import LanguageToggle from '@/app/components/LanguageToggle'

export default function HeaderNav() {
  const {t} = useLanguage()

  return (
    <nav>
      <ul
        role="list"
        className="flex items-center gap-4 md:gap-6 leading-5 text-xs sm:text-sm tracking-tight font-mono"
      >
        <li>
          <Link
            href="/blog"
            className="text-gray-400 hover:text-white hover:underline underline-offset-4 transition-colors"
          >
            {t.nav.blog}
          </Link>
        </li>
        <li>
          <Link
            href="/resume"
            className="text-gray-400 hover:text-white hover:underline underline-offset-4 transition-colors"
          >
            {t.nav.resume}
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-gray-400 hover:text-white hover:underline underline-offset-4 transition-colors"
          >
            {t.nav.about}
          </Link>
        </li>
        <li>
          <LanguageToggle />
        </li>
      </ul>
    </nav>
  )
}
