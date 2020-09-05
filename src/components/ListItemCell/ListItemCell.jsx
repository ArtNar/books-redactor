import React        from 'react'
import PropTypes    from 'prop-types'
import _cn          from 'utils/cn'
import styles       from './ListItemCell.module.css'

const cn = _cn('list-cell', styles)

const ListItemCell = ({
    children,
}) => (
    <div className={cn()}>
        {children}
    </div>
)

ListItemCell.propTypes = {
    children: PropTypes.node,
}

export default ListItemCell
