/* eslint-disable no-console */
import React                    from 'react'
import { useHistory }           from 'react-router-dom'
import { BookList }             from 'components/BookList'
import { ActionsPanel }         from 'components/ActionsPanel'
import { useQueryStorage }      from 'utils/hooks/useQueryStorage'
import { useMutationStorage }   from 'utils/hooks/useMutationStorage'
import { BOOKS_STORAGE_PATH }   from 'utils/constants/storage'

const getActions = ({ onCreate }) => [
    {
        key: 'add',
        label: 'Добавить новую',
        onClick: onCreate,
    },
]

const BooksPage = () => {
    const history = useHistory()
    const { data = [], loading, refetch } = useQueryStorage(BOOKS_STORAGE_PATH)
    const [saveData] = useMutationStorage(BOOKS_STORAGE_PATH)

    const handleClickCreateBook = () => history.push('/create')

    const handleCLickEditBook = (id) => {
        history.push(`/edit/${id}`)
    }

    const handleClickDeleteBook = async (bookId) => {
        // eslint-disable-next-line no-alert
        const shouldDelete = window.confirm('Удалить книгу?')
        if (shouldDelete) {
            try {
                await saveData(data.filter(({ id }) => bookId !== id))
                refetch()
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <>
            <ActionsPanel
                actions={getActions({
                    onCreate: handleClickCreateBook,
                })}
            />
            <BookList
                loading={loading}
                list={data}
                onEdit={handleCLickEditBook}
                onDelete={handleClickDeleteBook}
            />
        </>
    )
}

export default BooksPage
