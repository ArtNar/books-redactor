import React            from 'react'
import PropTypes        from 'prop-types'
import { Button }       from 'components/Button'
import { Form }         from 'components/forms/Form'
import { TextField }    from 'components/forms/TextField'
import { DateField }    from 'components/forms/DateField'

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
    }

    return (
        <Form onSubmit={handleSubmit}>
            <TextField
                {...fieldProps}
                label="Название"
                placeholder="Введите данные"
                name="name"
            />
            <DateField
                {...fieldProps}
                label="Дата выхода в тираж"
                placeholder="Введите данные"
                name="printDate"
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
