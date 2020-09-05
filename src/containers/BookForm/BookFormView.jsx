import React                from 'react'
import PropTypes            from 'prop-types'
import { Button }           from 'components/Button'
import { Form }             from 'components/forms/Form'
import { TextField }        from 'components/forms/TextField'
import { DateField }        from 'components/forms/DateField'
import { NumberField }      from 'components/forms/NumberField'
import { AuthorFieldArray } from 'components/forms/AuthorFieldArray'
import { FileField }        from 'components/forms/FileField'

const BookFormView = ({
    values,
    errors,
    touched,
    disabled: disabledProp,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
}) => {
    const fieldProps = {
        values,
        touched,
        errors,
        disabled: disabledProp || isSubmitting,
        onBlur: handleBlur,
        onChange: handleChange,
        placeholder: 'Введите данные',
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FileField
                {...fieldProps}
                name="image"
                label="Изображение"
            />
            <TextField
                {...fieldProps}
                label="Название"
                name="bookName"
            />
            <AuthorFieldArray
                {...fieldProps}
                name="authors"
            />
            <NumberField
                {...fieldProps}
                label="Количество страниц"
                name="amountOfPages"
            />
            <TextField
                {...fieldProps}
                label="Название издательства"
                name="publishingHouseName"
            />
            <NumberField
                {...fieldProps}
                label="Год публикации"
                name="publishYear"
            />
            <DateField
                {...fieldProps}
                label="Дата выхода в тираж"
                name="releaseDate"
            />
            <TextField
                {...fieldProps}
                label="ISBN"
                name="isbn"
            />
            <Button
                type="submit"
                disabled={disabledProp}
                inProgress={isSubmitting}
            >
                Сохранить
            </Button>
        </Form>
    )
}

BookFormView.propTypes = {
    data: PropTypes.shape({}),
    errors: PropTypes.shape({}),
    handleBlur: PropTypes.func,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    isSubmitting: PropTypes.bool,
    disabled: PropTypes.bool,
    touched: PropTypes.shape({}),
    values: PropTypes.shape({}),
}

export default BookFormView
