import React, { useMemo }               from 'react'
import { useHistory }                   from 'react-router-dom'
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
    const { data = [], loading } = useQueryStorage(BOOKS_STORAGE_PATH)
    const [saveData] = useMutationStorage(BOOKS_STORAGE_PATH)

    const redirectToHomePage = () => history.push('/')

    const handleSubmit = async (values) => {
        try {
            await saveData([
                ...data,
                {
                    id: values.id || uniqId(),
                    ...values,
                },
            ])

            redirectToHomePage()
        } catch (error) {
            console.error(error)
        }
    }

    const handleError = (error) => {
        console.log(error, 'error')
    }

    const initialValues = useMemo(() => ({
        ...getInitialValuesFromFields(fields),
    }), [])

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
            />
        </>
    )
}

export default BookPage
