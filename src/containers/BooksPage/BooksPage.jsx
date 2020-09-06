import React, { useMemo }       from 'react'
import { useHistory }           from 'react-router-dom'
import { BookList }             from 'components/BookList'
import { ActionsPanel }         from 'components/ActionsPanel'
import { Orderings }            from 'components/Orderings'
import { useQueryStorage }      from 'utils/hooks/useQueryStorage'
import { useMutationStorage }   from 'utils/hooks/useMutationStorage'
import { useOrdering }          from 'utils/hooks/useOrdering'
import { BOOKS_STORAGE_PATH }   from 'utils/constants/storage'
import { BOOKS_SORT_OPTIONS }   from 'utils/constants/ordering'

const getActions = ({ onCreate }) => [
    {
        key: 'add',
        label: 'Добавить новую',
        onClick: onCreate,
    },
]

const BooksPage = () => {
    const history = useHistory()
    const { data: books = [], loading, refetch } = useQueryStorage(BOOKS_STORAGE_PATH)
    const [saveData] = useMutationStorage(BOOKS_STORAGE_PATH)
    const { order, setOrder, resetOrder } = useOrdering()

    const handleClickCreateBook = () => history.push('/create')

    const handleCLickEditBook = (id) => history.push(`/edit/${id}`)

    const handleClickDeleteBook = async (bookId) => {
        // TODO: Добавить работу с модальными окнами
        // eslint-disable-next-line no-alert
        const shouldDelete = window.confirm('Удалить книгу?')
        if (shouldDelete) {
            try {
                await saveData(books.filter(({ id }) => bookId !== id))
                refetch()
            } catch (error) {
                console.error(error)
            }
        }
    }

    const sortedBooks = useMemo(() => {
        if (!order) {
            return books
        }

        // в каком порядке выводить если значнеие не заполнено?
        // например год публикации не обязательный параметр
        return books.sort((a, b) => (a[order] > b[order] ? 1 : -1))
    }, [books, order])

    return (
        <>
            <ActionsPanel
                actions={getActions({
                    onCreate: handleClickCreateBook,
                })}
            />
            {sortedBooks.length
                ? (
                    <Orderings
                        options={BOOKS_SORT_OPTIONS}
                        order={order}
                        setOrder={setOrder}
                        resetOrder={resetOrder}
                    />
                )
                : null}
            <BookList
                loading={loading}
                list={sortedBooks}
                onEdit={handleCLickEditBook}
                onDelete={handleClickDeleteBook}
            />
        </>
    )
}

export default BooksPage
