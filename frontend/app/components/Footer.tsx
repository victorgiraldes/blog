'use client'

import Link from 'next/link'
import {useLanguage} from '@/app/context/LanguageContext'

export default function Footer() {
  const {t} = useLanguage()

  return (
    <footer className="bg-gray-950 relative border-t border-gray-800">
      <div className="container relative">
        <div className="flex flex-col items-center py-16 lg:flex-row lg:justify-between">
          <div className="mb-8 lg:mb-0 text-center lg:text-left">
            <p className="font-bold tracking-tight text-xl text-white">Victor Giraldes</p>
            <p className="text-gray-500 font-mono text-sm mt-1">
              {t.nav.about === 'Sobre' ? 'Engenheiro de Software' : 'Software Engineer'}
            </p>
          </div>
          <div className="flex gap-6 items-center font-mono text-sm">
            <Link href="/about" className="flex items-center gap-1.5 hover:underline underline-offset-4 text-gray-500 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              {t.nav.about}
            </Link>
            <Link href="/blog" className="flex items-center gap-1.5 hover:underline underline-offset-4 text-gray-500 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              {t.nav.blog}
            </Link>
            <Link href="/resume" className="flex items-center gap-1.5 hover:underline underline-offset-4 text-gray-500 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="8" y1="13" x2="16" y2="13" /><line x1="8" y1="17" x2="16" y2="17" />
              </svg>
              {t.nav.resume}
            </Link>
            <Link
              href="https://github.com/victorgiraldes"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:underline underline-offset-4 text-gray-500 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z" />
              </svg>
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/victor-giraldes-927a31140/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:underline underline-offset-4 text-gray-500 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
              </svg>
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
