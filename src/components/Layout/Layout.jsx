import React            from 'react'
import PropTypes        from 'prop-types'
import _cn              from 'utils/cn'
import styles           from './Layout.module.css'

const cn = _cn('layout', styles)

const Layout = ({
    children,
    title,
}) => (
    <div className={cn()}>
        {title && (
            <div className={cn('title')}>
                <h2>{title}</h2>
            </div>
        )}
        <div className={cn('content')}>
            {children}
        </div>
    </div>
)

Layout.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
}

export default Layout
