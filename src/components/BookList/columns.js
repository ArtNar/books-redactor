import React from 'react'

export default [
    {
        key: 'image',
        render: ({ image }) => (
            image
                ? <img src={image} height="100" alt="" />
                : null
        ),
    },
    {
        key: 'bookName',
        label: 'Название',
        render: ({ bookName }) => (bookName),
    },
    {
        key: 'authors',
        label: 'Авторы',
        render: ({ authors }) => (Array.isArray(authors)
            ? authors.map(({ surname, name }) => `${surname} ${name}`).join(', ')
            : null)
        ,
    },
    {
        key: 'amountOfPages',
        label: 'Количество страниц',
        render: ({ amountOfPages }) => (amountOfPages),
    },
    {
        key: 'publishingHouseName',
        label: 'Название издательства',
        render: ({ publishingHouseName }) => (publishingHouseName),
    },
    {
        key: 'publishYear',
        label: 'Год публикации',
        render: ({ publishYear }) => (publishYear),
    },
    {
        key: 'releaseDate',
        label: 'Дата выхода в тираж',
        render: ({ releaseDate }) => (releaseDate),
    },
    {
        key: 'isbn',
        label: 'ISBN',
        render: ({ isbn }) => (isbn),
    },
]
