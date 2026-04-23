import { config, collection, fields } from '@keystatic/core';

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  storage:
    process.env.NODE_ENV === 'production'
      ? { kind: 'cloud' }
      : { kind: 'local' },
  cloud: {
    project: process.env.KEYSTATIC_CLOUD_PROJECT ?? '',
  },
  collections: {
    components: collection({
      label: 'Components',
      slugField: 'title',
      path: 'content/components/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: { directory: 'public/images/content', publicPath: '/images/content/' },
          },
        }),
      },
    }),
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: { directory: 'public/images/content', publicPath: '/images/content/' },
          },
        }),
      },
    }),
    content: collection({
      label: 'Content',
      slugField: 'title',
      path: 'content/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: { directory: 'public/images/content', publicPath: '/images/content/' },
          },
        }),
      },
    }),
  },
});