import React        from 'react'
import PropTypes    from 'prop-types'
import _cn          from 'utils/cn'
import { Paper }    from 'components/Paper'
import styles       from './ListItem.module.css'

const cn = _cn('list-item', styles)

const ListItem = ({
    children,
    className,
    ...rest
}) => (
    <Paper
        className={cn()}
        elevation={1}
        color="white"
        padded
    >
        <li
            {...rest}
            className={cn('inner')}
        >
            {children}
        </li>
    </Paper>

)

ListItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
}

export default ListItem
