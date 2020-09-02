import React        from 'react'
import PropTypes    from 'prop-types'
import _cn          from 'utils/cn'
import styles       from './Form.module.css'

const cn = _cn('form', styles)

const Form = ({
    children,
    onSubmit,
}) => (
    <form
        className={cn()}
        onSubmit={onSubmit}
    >
        {children}
    </form>
)

Form.propTypes = {
    children: PropTypes.node.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default Form
