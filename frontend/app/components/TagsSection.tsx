'use client'

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

export default function TagsSection() {
  const {t} = useLanguage()

  return (
    <div className="container py-12 border-t border-gray-800">
      <div className="mx-auto max-w-4xl lg:px-12">
        <h2 className="text-xs font-mono uppercase tracking-widest text-gray-600 mb-6">{t.tags.title}</h2>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-3 py-1.5 border border-gray-800 rounded-full text-gray-400 bg-gray-900 hover:border-gray-600 hover:text-gray-200 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
