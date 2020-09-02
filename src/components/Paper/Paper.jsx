import React        from 'react'
import PropTypes    from 'prop-types'
import cx           from 'classnames'
import _cn          from 'utils/cn'
import styles       from './Paper.module.css'

const cn = _cn('paper', styles)

const Paper = ({
    className,
    elevation = 0,
    padded,
    ...rest
}) => (
    <div
        {...rest}
        className={cx(cn({
            elevation,
            padded,
        }), className)}
    />
)

Paper.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    elevation: PropTypes.number,
    padded: PropTypes.bool,
}

export default Paper
