import React        from 'react'
import PropTypes    from 'prop-types'
import cx           from 'classnames'
import _cn          from 'utils/cn'
import styles       from './List.module.css'

const cn = _cn('list', styles)

const List = ({
    children,
    className,
    title,
    ...rest
}) => (
    <div
        {...rest}
        className={cx(cn(), className)}
    >
        {title && (
            <div className={cn('title')}>
                {title}
            </div>
        )}
        <ul className={cn('content')}>
            {children}
        </ul>
    </div>
)

List.propTypes = {
    children: PropTypes.node,
    component: PropTypes.elementType,
    title: PropTypes.node,
    className: PropTypes.string,
}

export default List
