import React, { useMemo }               from 'react'
import { useHistory, useParams }        from 'react-router-dom'
import uniqId                           from 'uniqid'
import { getInitialValuesFromFields }   from 'utils/helpers/getInitialValuesFromFields'
import { BookForm, fields }              from 'containers/BookForm'
import { ActionsPanel }                 from 'components/ActionsPanel'
import { useQueryStorage }              from 'utils/hooks/useQueryStorage'
import { useMutationStorage }           from 'utils/hooks/useMutationStorage'
import { BOOKS_STORAGE_PATH }           from 'utils/constants/storage'

const getActions = ({ onCancel }) => [
    {
        key: ' cancel',
        label: 'Назад',
        onClick: onCancel,
    },
]

const BookPage = () => {
    const history = useHistory()
    const { bookId } = useParams()
    const { data = [], loading } = useQueryStorage(BOOKS_STORAGE_PATH)
    const [saveData] = useMutationStorage(BOOKS_STORAGE_PATH)

    const redirectToHomePage = () => history.push('/')

    const handleSubmit = async (values) => {
        if (loading) {
            return
        }

        const currentBookId = values.id || uniqId()
        const newData = [
            ...data.filter(({ id }) => id !== currentBookId),
            {
                id: currentBookId,
                ...values,
            },
        ]

        try {
            await saveData(newData)

            redirectToHomePage()
        } catch (error) {
            console.error(error)
        }
    }

    const handleError = (error) => {
        console.log(error, 'error')
    }

    const bookData = bookId
        ? data.find(({ id }) => id === bookId)
        : {}

    const initialValues = useMemo(() => ({
        ...getInitialValuesFromFields(fields),
        ...bookData,
    }), [fields, bookData])

    return (
        <>
            <ActionsPanel
                actions={getActions({
                    onCancel: redirectToHomePage,
                })}
            />
            <BookForm
                initialValues={initialValues}
                onSubmit={handleSubmit}
                onError={handleError}
                disabled={loading}
            />
        </>
    )
}

export default BookPage
