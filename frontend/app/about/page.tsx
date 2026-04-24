'use client'

import Link from 'next/link'
import {useLanguage} from '@/app/context/LanguageContext'

const tags = [
  'System Design',
  'Backend',
  'API Design',
  'Scalability',
  'Ruby',
  'Rails',
  'TypeScript',
  'Node.js',
  'Algorithms',
  'Performance',
  'Optimization',
  'Kubernetes',
  'Distributed Systems',
  'Microservices',
  'Architecture',
  'PostgreSQL',
  'Redis',
]

export default function AboutPage() {
  const {t} = useLanguage()

  return (
    <div className="container mx-auto max-w-2xl lg:max-w-4xl lg:px-12 py-20 lg:py-32">
      <span className="text-xs font-mono uppercase tracking-widest text-gray-500">{t.about.label}</span>

      <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tighter text-white">
        Victor Giraldes
      </h1>

      <p className="mt-6 text-lg text-gray-400 font-light leading-relaxed max-w-prose">
        {t.about.bio1}
      </p>

      <p className="mt-4 text-lg text-gray-400 font-light leading-relaxed max-w-prose">
        {t.about.bio2}
      </p>

      <div className="mt-12 flex flex-col gap-4">
        <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500">{t.about.linksLabel}</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="https://github.com/victorgiraldes"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-black hover:bg-gray-800 text-white font-mono text-sm py-3 px-6 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z" />
            </svg>
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/victor-giraldes-927a31140/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-gray-700 hover:bg-gray-800 text-gray-300 font-mono text-sm py-3 px-6 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
            </svg>
            LinkedIn
          </Link>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-800 pt-12">
        <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">
          {t.about.topicsLabel}
        </h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-3 py-1.5 border border-gray-800 rounded-full text-gray-400 bg-gray-900"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
