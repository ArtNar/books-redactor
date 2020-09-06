/* eslint-disable react/button-has-type */
import React            from 'react'
import PropTypes        from 'prop-types'
import cx               from 'classnames'
import _cn              from 'utils/cn'
import styles           from './Select.module.css'

const cn = _cn('select', styles)

const Select = ({
    className,
    name,
    label,
    onChange,
    value = '',
    options = [],
}) => {
    const handleChange = (event) => {
        const newValue = event.target.value

        if (onChange) {
            onChange(newValue)
        }
    }

    return (
        <div className={cx(cn(), className)}>
            {label && (
                <span className={cn('label')}>
                    {label}
                </span>
            )}
            <select
                className={cn('inner')}
                name={name}
                value={value}
                onChange={handleChange}
            >
                {options.map(({
                    value: optionValue,
                    label: optionLabel,
                }) => (
                    <option
                        key={optionValue}
                        value={optionValue}
                    >
                        {optionLabel}
                    </option>
                ))}
            </select>
        </div>
    )
}

Select.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    options: PropTypes.arrayOf(
        PropTypes.shape({}),
    ),
}

export default Select
