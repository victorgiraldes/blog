'use client'

import {useActionState} from 'react'
import {subscribeToNewsletter} from '@/app/actions'
import {useLanguage} from '@/app/context/LanguageContext'

export default function NewsletterSection() {
  const [state, action, isPending] = useActionState(subscribeToNewsletter, null)
  const {t} = useLanguage()

  return (
    <section className="border-t border-yellow-400/20 bg-gray-950">
      <div className="container py-20">
        <div className="mx-auto max-w-4xl lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            {/* Left */}
            <div className="max-w-md">
              <span className="inline-block font-mono text-xs uppercase tracking-widest text-yellow-400 mb-3">
                {t.newsletter.label}
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                {t.newsletter.title}
              </h2>
              <p className="mt-3 text-gray-400 leading-relaxed text-sm">
                {t.newsletter.description}
              </p>
            </div>

            {/* Right — form */}
            <div className="w-full max-w-sm">
              {state?.success ? (
                <div className="border border-yellow-400/30 rounded-sm px-5 py-4 bg-yellow-400/5">
                  <p className="text-yellow-400 font-mono text-sm">{state.message}</p>
                </div>
              ) : (
                <form action={action} className="flex flex-col gap-3">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder={t.newsletter.placeholder}
                      className="flex-1 bg-gray-900 border border-gray-800 focus:border-yellow-400 rounded-sm px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-colors font-mono"
                    />
                    <button
                      type="submit"
                      disabled={isPending}
                      className="bg-yellow-400 hover:bg-yellow-300 disabled:opacity-50 text-gray-950 font-mono text-sm font-semibold px-5 py-2.5 rounded-sm transition-colors whitespace-nowrap"
                    >
                      {isPending ? '...' : t.newsletter.subscribe}
                    </button>
                  </div>
                  {state?.success === false && (
                    <p className="text-red-400 font-mono text-xs">{state.message}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
