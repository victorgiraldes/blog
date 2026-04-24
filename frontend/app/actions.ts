'use server'

import {draftMode} from 'next/headers'
import {createClient} from 'next-sanity'
import {apiVersion, dataset, projectId} from '@/sanity/lib/api'

export async function disableDraftMode() {
  'use server'
  await Promise.allSettled([
    (await draftMode()).disable(),
    // Simulate a delay to show the loading state
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ])
}

export async function subscribeToNewsletter(
  _prevState: {success: boolean; message: string} | null,
  formData: FormData,
): Promise<{success: boolean; message: string}> {
  const email = formData.get('email')?.toString().trim()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {success: false, message: 'Please enter a valid email address.'}
  }

  const writeToken = process.env.SANITY_API_WRITE_TOKEN
  if (!writeToken) {
    console.error('Missing SANITY_API_WRITE_TOKEN')
    return {success: false, message: 'Service unavailable. Please try again later.'}
  }

  const writeClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token: writeToken,
  })

  try {
    // Check if already subscribed
    const existing = await writeClient.fetch(
      `*[_type == "subscriber" && email == $email][0]._id`,
      {email},
    )
    if (existing) {
      return {success: true, message: "You're already subscribed!"}
    }

    await writeClient.create({
      _type: 'subscriber',
      email,
      subscribedAt: new Date().toISOString(),
    })

    return {success: true, message: "You're subscribed! Thanks for joining."}
  } catch (err) {
    console.error('Newsletter subscription error:', err)
    return {success: false, message: 'Something went wrong. Please try again.'}
  }
}
