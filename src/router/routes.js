import { lazy } from 'react'

export const routes = [
    {
        path: '/',
        exact: true,
        name: 'bookList',
        component: lazy(() => import('containers/BooksPage')),
        title: 'Список книг',
    },
    {
        path: '/create',
        name: 'createBook',
        component: lazy(() => import('containers/BookPage')),
        title: 'Добавить новую книгу',
    },
    {
        path: '*',
        name: 'notfound',
        component: lazy(() => import('components/NotFoundPage')),
    },
]
