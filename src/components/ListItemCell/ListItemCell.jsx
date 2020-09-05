import React        from 'react'
import PropTypes    from 'prop-types'
import _cn          from 'utils/cn'
import styles       from './ListItemCell.module.css'

const cn = _cn('list-cell', styles)

const ListItemCell = ({
    children,
    label,
}) => (
    <div className={cn()}>
        {label && (
            <span className={cn('label')}>
                {`${label}: `}
            </span>
        )}
        <span className={cn('value')}>
            {children}
        </span>
    </div>
)

ListItemCell.propTypes = {
    children: PropTypes.node,
    label: PropTypes.string,
}

export default ListItemCell
