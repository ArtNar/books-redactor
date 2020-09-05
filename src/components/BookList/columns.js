export default [
    {
        key: 'bookName',
        label: 'Название',
        render: ({ bookName }) => (bookName),
    },
    {
        key: 'authors',
        label: 'Авторы',
        render: ({ authors }) => (Array.isArray(authors)
            ? authors.join(', ')
            : null)
        ,
    },
    {
        key: 'amountOfPages',
        label: 'Количество страниц',
        render: ({ amountOfPages }) => (amountOfPages),
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
