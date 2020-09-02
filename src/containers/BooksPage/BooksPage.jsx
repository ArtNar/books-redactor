import React                    from 'react'
import { useHistory }           from 'react-router-dom'
import { BookList }             from 'components/BookList'
import { ActionsPanel }         from 'components/ActionsPanel'
import { useQueryStorage }      from 'utils/hooks/useQueryStorage'
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
    const { data = [], loading } = useQueryStorage(BOOKS_STORAGE_PATH)

    const handleClickCreateBook = () => history.push('/create')

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
            />
        </>
    )
}

export default BooksPage
