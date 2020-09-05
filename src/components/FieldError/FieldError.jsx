import React        from 'react'
import PropTypes    from 'prop-types'
import _cn          from 'utils/cn'
import styles       from './FieldError.module.css'

const cn = _cn('field-error', styles)

const FieldError = ({
    error = '',
}) => (
    error
        ? (
            <span className={cn()}>
                {error}
            </span>
        )
        : null
)

FieldError.propTypes = {
    error: PropTypes.string,
}

export default FieldError
