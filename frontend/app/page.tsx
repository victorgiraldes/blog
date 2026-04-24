import {Suspense} from 'react'

import {AllPosts} from '@/app/components/Posts'
import HeroSection from '@/app/components/HeroSection'
import TagsSection from '@/app/components/TagsSection'
import NewsletterSection from '@/app/components/NewsletterSection'

export default async function Page() {
  return (
    <>
      <HeroSection />
      <TagsSection />
      <div className="border-t border-gray-800 bg-gray-900">
        <div className="container">
          <aside className="py-12 sm:py-20">
            <Suspense>{await AllPosts()}</Suspense>
          </aside>
        </div>
      </div>
      <NewsletterSection />
    </>
  )
}
