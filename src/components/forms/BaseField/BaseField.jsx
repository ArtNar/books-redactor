import React            from 'react'
import PropTypes        from 'prop-types'
import get              from 'just-safe-get'
import { FieldWrapper } from 'components/FieldWrapper'

const BaseField = ({
    component: Component,
    name,
    values = {},
    touched = {},
    errors = {},
    collapsed,
    ...rest
}) => (
    <FieldWrapper collapsed={collapsed}>
        <Component
            {...rest}
            name={name}
            value={get(values, name)}
            error={get(touched, name) && get(errors, name)}
        />
    </FieldWrapper>
)

BaseField.propTypes = {
    component: PropTypes.func,
    collapsed: PropTypes.bool,
    data: PropTypes.shape({}),
    errors: PropTypes.shape({}),
    name: PropTypes.string,
    touched: PropTypes.shape({}),
    values: PropTypes.shape({}),
}

export default BaseField
