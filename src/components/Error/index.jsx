import React from 'react'
import PropTypes from 'prop-types'

const ErrorComponent = ({
    title,
    error,
}) => {
    let message = 'Неизвестная ошибка'

    if (error) {
        if (typeof error === 'string') {
            message = error
        } else {
            message = error.message
        }
    }

    return (
        <div>
            <h2>{title}</h2>
            <span>{message}</span>
        </div>
    )
}

ErrorComponent.propTypes = {
    title: PropTypes.string,
    error: PropTypes.oneOfType([
        PropTypes.shape({
            message: PropTypes.string,
        }),
        PropTypes.string,
    ]),
}

export default ErrorComponent
