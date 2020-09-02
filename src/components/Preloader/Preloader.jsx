import React        from 'react'
import PropTypes    from 'prop-types'
import cx           from 'classnames'
import _cn          from 'utils/cn'
import styles       from './Preloader.module.css'

const cn = _cn('preloader', styles)

const Preloader = ({
    className,
}) => (
    <span className={cx(cn(), className)} />
)

Preloader.propTypes = {
    className: PropTypes.string,
}

export default Preloader
