import {defineField, defineType} from 'sanity'
import {EnvelopeIcon} from '@sanity/icons'

export const subscriber = defineType({
  name: 'subscriber',
  title: 'Newsletter Subscribers',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'subscribedAt',
      title: 'Subscribed At',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {title: 'email', subtitle: 'subscribedAt'},
  },
})
