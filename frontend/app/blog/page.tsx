import type {Metadata} from 'next'
import {Suspense} from 'react'
import Link from 'next/link'

import {sanityFetch} from '@/sanity/lib/live'
import {allPostsQuery} from '@/sanity/lib/queries'
import {AllPostsQueryResult} from '@/sanity.types'
import DateComponent from '@/app/components/Date'
import Avatar from '@/app/components/Avatar'
import {dataAttr} from '@/sanity/lib/utils'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articles on backend engineering, system design, Ruby, Kubernetes, and more.',
}

const PostCard = ({post}: {post: AllPostsQueryResult[number]}) => {
  const {_id, title, slug, excerpt, date, author} = post

  return (
    <article
      data-sanity={dataAttr({id: _id, type: 'post', path: 'title'}).toString()}
      className="group relative border-l-2 border-gray-800 hover:border-yellow-400 bg-gray-900/50 hover:bg-gray-900 transition-all duration-300 pl-6 py-6 pr-6"
    >
      <Link href={`/posts/${slug}`}>
        <span className="absolute inset-0 z-10" />
      </Link>

      {/* Glow dot on border */}
      <div className="absolute -left-[5px] top-7 w-2 h-2 rounded-full bg-gray-700 group-hover:bg-yellow-400 transition-colors duration-300" />

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <time className="font-mono text-xs text-gray-600">
            <DateComponent dateString={date} />
          </time>
          {post.status === 'draft' && (
            <span className="font-mono text-xs text-yellow-400/60 border border-yellow-400/20 px-2 py-0.5 rounded-full">
              draft
            </span>
          )}
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white group-hover:text-yellow-400 transition-colors duration-200">
          {title}
        </h2>

        {excerpt && (
          <p className="text-sm leading-relaxed text-gray-400 line-clamp-2 max-w-2xl">
            {excerpt}
          </p>
        )}

        <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-800">
          {author?.firstName && author?.lastName && (
            <Avatar person={author} small />
          )}
          <span className="font-mono text-xs text-gray-600 group-hover:text-yellow-400/60 transition-colors ml-auto">
            Read →
          </span>
        </div>
      </div>
    </article>
  )
}

async function BlogPosts() {
  const {data} = await sanityFetch({query: allPostsQuery})

  if (!data || data.length === 0) {
    return (
      <div className="border-l-2 border-gray-800 pl-6 py-8">
        <p className="font-mono text-sm text-gray-600">No posts yet.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col divide-y divide-gray-800/50">
      {data.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  )
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-950">
        <div className="container mx-auto max-w-4xl lg:px-12 py-16 lg:py-24">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-yellow-400">
                // blog
              </span>
              <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Articles
              </h1>
              <p className="mt-3 text-gray-400 max-w-md leading-relaxed">
                Thoughts on backend engineering, system design, performance, and the craft of building software.
              </p>
            </div>

            {/* Decorative grid */}
            <div className="hidden lg:grid grid-cols-6 grid-rows-3 gap-1 opacity-30">
              {Array.from({length: 18}).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${i % 5 === 0 || i % 7 === 0 ? 'bg-yellow-400' : 'bg-gray-700'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Posts */}
      <div className="container mx-auto max-w-4xl lg:px-12 py-12 lg:py-20">
        <Suspense
          fallback={
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border-l-2 border-gray-800 pl-6 py-6 animate-pulse">
                  <div className="h-3 w-24 bg-gray-800 rounded mb-4" />
                  <div className="h-6 w-3/4 bg-gray-800 rounded mb-3" />
                  <div className="h-4 w-full bg-gray-800/50 rounded" />
                </div>
              ))}
            </div>
          }
        >
          <BlogPosts />
        </Suspense>
      </div>
    </div>
  )
}
