import React        from 'react'
import PropTypes    from 'prop-types'
import get          from 'just-safe-get'

const BaseField = ({
    component: Component,
    name,
    values = {},
    touched = {},
    errors = {},
    ...rest
}) => (
    <Component
        {...rest}
        name={name}
        value={get(values, name)}
        error={get(touched, name) && get(errors, name)}
    />
)

BaseField.propTypes = {
    component: PropTypes.func,
    data: PropTypes.shape({}),
    errors: PropTypes.shape({}),
    name: PropTypes.string,
    touched: PropTypes.shape({}),
    values: PropTypes.shape({}),
}

export default BaseField
