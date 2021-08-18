/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-dupe-keys */

export default {
    name: 'work',
    title: 'Work',
    type: 'document',
    fields: 
    [
        {
            name: 'title',
            title: 'Title,',
            type: 'string'
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
          },
        {
            name: 'portfoliolink',
            title: 'Portfolio Link',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96
            },
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent'
        },
        {
            name: 'date',
            title: 'Published at',
            type: 'datetime'
        },
        {
            name: 'client',
            type: 'string'
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}],
        },
        {
            name: 'mainImage',
            title: 'Header Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'portraitImage',
            title: 'Card Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'youtube',
            type: 'youtube'
        },
        {
            name: 'foregroundColor',
            title: 'Foreground color',
            type: 'color'
        },
        {
            name: 'backgroundColor',
            title: 'Background color',
            type: 'color'
        },
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage'
        },
        prepare(selection) {
            const {author} = selection
            return Object.assign({}, selection, {
            subtitle: author && `by ${author}`,
            })
        },
    },
}