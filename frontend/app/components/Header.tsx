import Link from 'next/link'
import {settingsQuery} from '@/sanity/lib/queries'
import {sanityFetch} from '@/sanity/lib/live'
import HeaderNav from '@/app/components/HeaderNav'

export default async function Header() {
  const {data: settings} = await sanityFetch({
    query: settingsQuery,
  })

  return (
    <header className="fixed z-50 h-20 inset-0 bg-gray-950/90 flex items-center backdrop-blur-lg border-b border-gray-800">
      <div className="container py-4 px-2 sm:px-6">
        <div className="flex items-center justify-between gap-5">
          <Link className="flex items-center gap-2" href="/">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
              {settings?.title || 'Victor Giraldes'}
            </span>
          </Link>
          <HeaderNav />
        </div>
      </div>
    </header>
  )
}
