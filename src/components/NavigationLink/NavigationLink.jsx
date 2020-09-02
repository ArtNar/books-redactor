import React            from 'react'
import PropTypes        from 'prop-types'
import { Link }         from 'react-router-dom'
import _cn              from 'utils/cn'
import styles           from './NavigationLink.module.css'

const cn = _cn('navigation-link', styles)

const NavigationLink = ({
    children,
    text,
    ...rest
}) => (
    <Link
        {...rest}
        className={cn()}
    >
        {children}
        {text && (
            <span>
                {text}
            </span>
        )}
    </Link>
)

NavigationLink.propTypes = {
    children: PropTypes.node,
    text: PropTypes.string,
}

export default NavigationLink
