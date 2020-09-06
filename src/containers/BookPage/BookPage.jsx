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

const prepareData = (data) => new Promise((resolve) => {
    if (!data.image || typeof data.image === 'string') {
        resolve(data)
    }

    const fReader = new FileReader()
    fReader.onload = () => {
        resolve({
            ...data,
            image: fReader.result,
        })
    }
    fReader.readAsDataURL(data.image)
})

const BookPage = () => {
    const history = useHistory()
    const { bookId } = useParams()
    const { data = [], loading } = useQueryStorage(BOOKS_STORAGE_PATH)
    const [saveData] = useMutationStorage(BOOKS_STORAGE_PATH)

    const redirectToHomePage = () => history.push('/')

    const handleSubmit = async (values) => {
        const currentBookId = values.id || uniqId()

        return prepareData(values)
            .then((newBookData) => ([
                ...data.filter(({ id }) => id !== currentBookId),
                {
                    id: currentBookId,
                    ...newBookData,
                },
            ]))
            .then(saveData)
    }

    const handleError = (error) => {
        // TODO: Добавить вывод в Snackbar
        alert(error)
    }

    const initialValues = useMemo(() => {
        const bookData = bookId
            ? data.find(({ id }) => id === bookId)
            : {}

        return ({
            ...getInitialValuesFromFields(fields),
            ...bookData,
        })
    }, [fields, bookId, data])

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
                onFinish={redirectToHomePage}
                disabled={loading}
            />
        </>
    )
}

export default BookPage
