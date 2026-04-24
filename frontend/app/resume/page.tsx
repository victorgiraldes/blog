import type {Metadata} from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Backend Developer with 7+ years of experience in Ruby, Rails, Node.js and distributed systems.',
}

const skillGroups = [
  {
    category: 'Languages',
    skills: ['Ruby', 'Node.js', 'Python'],
  },
  {
    category: 'Frameworks',
    skills: ['Ruby on Rails', 'NestJS', 'Django'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL'],
  },
  {
    category: 'Cloud & Infrastructure',
    skills: ['AWS', 'Kubernetes'],
  },
  {
    category: 'DevOps',
    skills: ['CI/CD', 'Git', 'GitHub'],
  },
  {
    category: 'Methodology',
    skills: ['Scrum', 'Code Review', 'Unit Testing'],
  },
]

const experience = [
  {
    company: 'Foxbit',
    role: 'Backend Developer',
    period: '01/2025 — Present',
    location: 'São Paulo, Brazil (Remote)',
    bullets: [
      'Building highly available and secure backend systems for crypto custody operations.',
      'Developing services using Ruby (Rails) and Node.js (NestJS), ensuring scalable architecture.',
      'Designing custody solutions including wallet integrations and risk/compliance modules.',
      'Optimizing API performance and database queries for high transaction volumes in real-time environments.',
      'Applying best practices in CI/CD, automated testing, and monitoring.',
    ],
  },
  {
    company: 'Getninjas',
    role: 'Backend Developer',
    period: '02/2022 — 11/2024',
    location: 'São Paulo, Brazil (Remote)',
    bullets: [
      'Optimized code performance by implementing efficient algorithms and data structures.',
      'Streamlined API integration for seamless communication between frontend and backend systems.',
      'Reduced server response time by optimizing database queries and indexing strategies.',
      'Proposed and implemented Hexagonal Architecture for improved maintainability.',
      'Saved $4,500/month on AWS SQS costs by refactoring legacy message queue infrastructure.',
      'Conducted code reviews and wrote unit tests to increase code coverage.',
    ],
  },
  {
    company: 'James Delivery',
    role: 'Backend Developer',
    period: '02/2021 — 02/2022',
    location: 'Curitiba, Brazil (Remote)',
    bullets: [
      'Developed a new login system using OTP technology.',
      'Implemented unit and functional tests to improve codebase quality.',
      'Optimized SQL queries for better performance.',
      'Collaborated with mobile developers to improve user experience.',
    ],
  },
  {
    company: 'EasyFarm',
    role: 'Full Stack Developer',
    period: '10/2019 — 02/2021',
    location: 'Ribeirão Preto, Brazil (Remote)',
    bullets: [
      'Integrated third-party APIs for a more robust platform.',
      'Implemented a new REST API to serve a Vue.js Single Page Application.',
      'Maintained and improved a legacy monolith application, resolving technical debt.',
    ],
  },
  {
    company: 'Dogme',
    role: 'Full Stack Developer',
    period: '02/2018 — 11/2018 / 07/2019 — 10/2019',
    location: 'São Paulo, Brazil',
    bullets: [
      'Developed responsive front-end interfaces and new application features.',
      'Planned a White Label site for Dog Walker clients.',
      'Refactored legacy codebase applying development best practices.',
    ],
  },
]

export default function ResumePage() {
  return (
    <div className="container mx-auto max-w-2xl lg:max-w-4xl lg:px-12 py-20 lg:py-32">
      {/* Header */}
      <div className="flex items-start justify-between gap-6 flex-wrap">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-gray-500">Resume</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Victor Giraldes
          </h1>
          <p className="mt-2 text-gray-400 font-mono text-sm">Backend Developer · 7+ years</p>
        </div>
        <a
          href="/Victor_Giraldes_Resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full border border-gray-700 hover:border-yellow-400 hover:text-yellow-400 text-gray-400 font-mono text-sm py-2.5 px-5 transition-colors self-start mt-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
          </svg>
          Download PDF
        </a>
      </div>

      {/* Summary */}
      <div className="mt-12 border-t border-gray-800 pt-10">
        <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-4">Summary</h2>
        <p className="text-gray-300 leading-relaxed">
          Backend developer with over 7 years of experience and deep expertise in Ruby and Ruby on Rails.
          Passionate about technology since childhood, I focus on building scalable, high-performance systems
          and applying distributed architecture best practices.
        </p>
      </div>

      {/* Skills */}
      <div className="mt-12 border-t border-gray-800 pt-10">
        <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-2.5 py-1 border border-gray-800 rounded-full text-gray-300 bg-gray-900"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div className="mt-12 border-t border-gray-800 pt-10">
        <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-8">Experience</h2>
        <div className="space-y-10">
          {experience.map((job) => (
            <div key={job.company + job.period}>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-lg font-semibold text-white">{job.company}</h3>
                  <p className="text-gray-400 text-sm mt-0.5">{job.role}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className="font-mono text-xs text-gray-500">{job.period}</p>
                  <p className="font-mono text-xs text-gray-600 mt-0.5">{job.location}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                    <span className="text-gray-600 mt-1 shrink-0">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mt-12 border-t border-gray-800 pt-10">
        <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">Education</h2>
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h3 className="text-base font-semibold text-white">UNIJALES — Centro Universitário de Jales</h3>
            <p className="text-gray-400 text-sm mt-0.5">Bachelor of Information Systems</p>
          </div>
          <p className="font-mono text-xs text-gray-500 shrink-0">12/2013</p>
        </div>
      </div>

      {/* Languages */}
      <div className="mt-12 border-t border-gray-800 pt-10">
        <h2 className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6">Languages</h2>
        <div className="flex gap-8">
          <div>
            <p className="text-white text-sm font-medium">Portuguese</p>
            <p className="font-mono text-xs text-gray-500 mt-1">Native (C2)</p>
          </div>
          <div>
            <p className="text-white text-sm font-medium">English</p>
            <p className="font-mono text-xs text-gray-500 mt-1">Intermediate (B2)</p>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="mt-12 border-t border-gray-800 pt-10 flex gap-6">
        <Link
          href="https://github.com/victorgiraldes"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-gray-400 underline underline-offset-4 hover:text-white transition-colors"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/victor-giraldes-927a31140/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-gray-400 underline underline-offset-4 hover:text-white transition-colors"
        >
          LinkedIn
        </Link>
      </div>
    </div>
  )
}
