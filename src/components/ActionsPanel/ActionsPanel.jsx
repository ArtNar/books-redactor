import React        from 'react'
import PropTypes    from 'prop-types'
import { Button }   from 'components/Button'
import _cn          from 'utils/cn'
import styles       from './ActionsPanel.module.css'

const cn = _cn('actions-panel', styles)

const ActionsPanel = ({
    actions = [],
}) => (
    <div className={cn()}>
        {actions.map(({
            key,
            label,
            onClick,
            ...rest
        }) => (
            <Button
                {...rest}
                key={key}
                onClick={onClick}
            >
                {label}
            </Button>
        ))}
    </div>
)

ActionsPanel.propTypes = {
    actions: PropTypes.arrayOf(
        PropTypes.shape({}),
    ),
}

export default ActionsPanel
