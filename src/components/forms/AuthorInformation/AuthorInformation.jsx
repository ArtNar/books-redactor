import React                from 'react'
import PropTypes            from 'prop-types'
import { TextField }        from 'components/forms/TextField'

const AuthorInformation = ({
    formName,
    disabled,
    onBlur,
    onChange,
    errors = {},
    values = {},
    touched = {},
}) => {
    const fieldProps = {
        values,
        touched,
        errors,
        disabled,
        onBlur,
        onChange,
        placeholder: 'Введите данные',
    }

    return (
        <>
            <TextField
                {...fieldProps}
                name={`${formName}.name`}
                label="Имя"
            />
            <TextField
                {...fieldProps}
                name={`${formName}.surname`}
                label="Фамилия"
            />
        </>
    )
}

AuthorInformation.propTypes = {
    disabled: PropTypes.bool,
    errors: PropTypes.shape({}),
    formName: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    touched: PropTypes.shape({}),
    values: PropTypes.shape({}),
}

export default AuthorInformation
