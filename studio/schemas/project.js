/* eslint-disable import/no-anonymous-default-export */

export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
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
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
        {
            name: 'date',
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
            title: 'Main image',
            type: 'image',
            options: {
            hotspot: true,
            },
        },
        {
            name: 'Youtube',
            type: 'youtube'
        }
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