import React                from 'react'
import PropTypes            from 'prop-types'
import { useFormikContext } from 'formik'
import { BaseField }        from 'components/forms/BaseField'
import { FileInput }        from 'components/FileInput'

const FileField = ({
    name,
    ...rest
}) => {
    const { setFieldValue, setFieldTouched } = useFormikContext()

    const updateField = (newValue) => {
        setFieldTouched(name, true)
        setFieldValue(name, newValue)
    }

    const handleChange = (newValue) => {
        updateField(newValue)
    }

    const handleDelete = (newValue) => {
        updateField(newValue)
    }

    return (
        <BaseField
            {...rest}
            component={FileInput}
            name={name}
            onChange={handleChange}
            onDelete={handleDelete}
        />
    )
}

FileField.propTypes = {
    name: PropTypes.string,
    onDelete: PropTypes.func,
}

export default FileField
