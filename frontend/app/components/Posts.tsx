import Link from 'next/link'

import {sanityFetch} from '@/sanity/lib/live'
import {morePostsQuery, allPostsQuery} from '@/sanity/lib/queries'
import {AllPostsQueryResult} from '@/sanity.types'
import DateComponent from '@/app/components/Date'
import OnBoarding from '@/app/components/Onboarding'
import Avatar from '@/app/components/Avatar'
import {dataAttr} from '@/sanity/lib/utils'

const Post = ({post}: {post: AllPostsQueryResult[number]}) => {
  const {_id, title, slug, excerpt, date, author} = post

  return (
    <article
      data-sanity={dataAttr({id: _id, type: 'post', path: 'title'}).toString()}
      key={_id}
      className="group relative border-l-2 border-gray-800 hover:border-yellow-400 bg-gray-900/40 hover:bg-gray-900 transition-all duration-300 pl-6 py-5 pr-6"
    >
      <Link className="hover:text-gray-300 transition-colors" href={`/posts/${slug}`}>
        <span className="absolute inset-0 z-10" />
      </Link>
      <div className="absolute -left-[5px] top-6 w-2 h-2 rounded-full bg-gray-700 group-hover:bg-yellow-400 transition-colors duration-300" />
      <div>
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-yellow-400 transition-colors duration-200">{title}</h3>
        <p className="line-clamp-2 text-sm leading-6 text-gray-400 max-w-[70ch]">{excerpt}</p>
      </div>
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-800">
        {author && author.firstName && author.lastName && (
          <div className="flex items-center">
            <Avatar person={author} small={true} />
          </div>
        )}
        <time className="text-gray-600 text-xs font-mono ml-auto" dateTime={date}>
          <DateComponent dateString={date} />
        </time>
      </div>
    </article>
  )
}

const Posts = ({
  children,
  heading,
  subHeading,
}: {
  children: React.ReactNode
  heading?: string
  subHeading?: string
}) => (
  <div>
    {heading && <h2 className="text-3xl text-white sm:text-4xl lg:text-5xl">{heading}</h2>}
    {subHeading && <p className="mt-2 text-lg leading-8 text-gray-500">{subHeading}</p>}
    <div className="pt-6 space-y-6">{children}</div>
  </div>
)

export const MorePosts = async ({skip, limit}: {skip: string; limit: number}) => {
  const {data} = await sanityFetch({
    query: morePostsQuery,
    params: {skip, limit},
  })

  if (!data || data.length === 0) {
    return null
  }

  return (
    <Posts heading={`Recent Posts (${data?.length})`}>
      {data?.map((post: AllPostsQueryResult[number]) => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  )
}

export const AllPosts = async () => {
  const {data} = await sanityFetch({query: allPostsQuery})

  if (!data || data.length === 0) {
    return <OnBoarding />
  }

  return (
    <Posts
      heading="Latest Posts"
    >
      {data.map((post: AllPostsQueryResult[number]) => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  )
}
