import React        from 'react'
import PropTypes    from 'prop-types'
import _cn          from 'utils/cn'
import styles       from './ListItem.module.css'

const cn = _cn('list-item', styles)

const ListItem = ({
    children,
    className,
    ...rest
}) => (
    <li
        {...rest}
        className={cn()}
    >
        {children}
    </li>
)

ListItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

export default ListItem
