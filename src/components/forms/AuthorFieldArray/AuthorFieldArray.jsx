import React                    from 'react'
import PropTypes                from 'prop-types'
import { BaseFieldArray }       from 'components/forms/BaseFieldArray'
import { AuthorInformation }    from 'components/forms/AuthorInformation'

const DEFAULT_VALUE = {
    name: '',
    surname: '',
}

const AuthorFieldArray = ({
    name,
    label = 'Авторы',
    disabled,
    errors,
    values,
    touched,
    onChange,
    onBlur,
}) => (
    <div>
        <BaseFieldArray
            name={name}
            label={label}
            minFields={1}
            disabled={disabled}
            values={values}
            defaultValue={DEFAULT_VALUE}
        >
            {(index) => (
                <AuthorInformation
                    formName={`${name}.${index}`}
                    withLabels={false}
                    disabled={disabled}
                    onChange={onChange}
                    onBlur={onBlur}
                    values={values}
                    errors={errors}
                    touched={touched}
                />
            )}
        </BaseFieldArray>
    </div>
)

AuthorFieldArray.propTypes = {
    disabled: PropTypes.bool,
    errors: PropTypes.shape({}),
    name: PropTypes.string,
    label: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    touched: PropTypes.shape({}),
    values: PropTypes.shape({}),
}

export default AuthorFieldArray
