import React            from 'react'
import PropTypes        from 'prop-types'
import { Select }       from 'components/Select'
import { Button }       from 'components/Button'
import _cn              from 'utils/cn'
import styles           from './Orderings.module.css'

const cn = _cn('orderings', styles)

const Orderings = ({
    options = [],
    order,
    setOrder,
    resetOrder,
    label = 'Сортировать по ',
}) => {
    const handleChange = (value) => {
        if (setOrder) {
            setOrder({
                order: value,
            })
        }
    }

    return (
        <div className={cn()}>
            <Select
                onChange={handleChange}
                options={options}
                label={label}
                value={order}
            />
            {resetOrder && (
                <Button
                    className={cn('button')}
                    onClick={resetOrder}
                >
                    Сбросить
                </Button>
            )}
        </div>
    )
}

Orderings.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({}),
    ),
    order: PropTypes.string,
    setOrder: PropTypes.func,
    resetOrder: PropTypes.func,
    label: PropTypes.string,
}

export default Orderings
