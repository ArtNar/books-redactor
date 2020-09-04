import React        from 'react'
import PropTypes    from 'prop-types'
import cx           from 'classnames'
import _cn          from 'utils/cn'
import styles       from './FieldWrapper.module.css'

const cn = _cn('field-wrapper', styles)

const FieldWrapper = ({
    className,
    collapsed,
    ...rest
}) => (
    <div
        {...rest}
        className={cx(cn({
            collapsed,
        }), className)}
    />
)

FieldWrapper.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    collapsed: PropTypes.bool,
}

export default FieldWrapper
