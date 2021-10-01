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
            type: 'blockContent',
        },
        // details
        {
            name: 'role',
            type: 'string'
        },
        {
            name: 'client',
            type: 'string'
        },
        {
            name: 'date',
            title: 'Published at',
            type: 'date',
            options: {
                dateFormat: 'MMMM YYYY',
              },
        },
        // About 
        {
            title: 'About title',
            name: 'aboutTitle',
            type: 'string',
        },
        {
            title: 'About content', 
            name: 'aboutContent',
            type: 'array', 
            of: [{type: 'block'}]
        },
        {
            title: 'Content Image',
            name: 'contentImage',
            type: 'contentImage',
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}],
        },
        {
            name: 'contentVideo',
            title: 'Content Video',
            type: 'video',
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
            title: 'Video',
            name: 'video',
            type: 'video',
        },
        // {
        //     name: 'youtube',
        //     type: 'youtube',
        // },
        {
            name: 'foregroundColor',
            title: 'Foreground color',
            type: 'color',
        },
        {
            name: 'backgroundColor',
            title: 'Background color',
            type: 'color',
        },
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'mainImage',
        },
        prepare(selection) {
            const {author} = selection
            return Object.assign({}, selection, {
            subtitle: author && `by ${author}`,
            })
        },
    },
}