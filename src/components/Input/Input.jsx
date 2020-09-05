/* eslint-disable react/button-has-type */
import React            from 'react'
import PropTypes        from 'prop-types'
import cx               from 'classnames'
import _cn              from 'utils/cn'
import { FieldError }   from 'components/FieldError'
import styles           from './Input.module.css'

const cn = _cn('input', styles)

const Input = ({
    name,
    className,
    disabled,
    type = 'text',
    placeholder,
    required,
    error,
    label,
    onBlur,
    onChange,
    onClick,
    onKeyDown,
    onKeyUp,
    onFocus,
    value = '',
    ...rest
}) => {
    const handleFocus = (event) => {
        if (onFocus) {
            onFocus(event)
        }
    }

    const handleBlur = (event) => {
        if (onBlur) {
            onBlur(event)
        }
    }

    const handleChange = (event, ...args) => {
        if (onChange) {
            onChange(event, ...args)
        }
    }

    const handleClick = (event) => {
        if (onClick) {
            onClick(event)
        }
    }

    return (
        <div className={cx(cn('wrapper', className))}>
            {label && (
                <div className={cn('label')}>
                    {label}
                </div>
            )}
            <div className={cn({ disabled })}>
                <input
                    {...rest}
                    className={cn('inner')}
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    onKeyDown={onKeyDown}
                    onKeyUp={onKeyUp}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onClick={handleClick}
                />
            </div>
            <FieldError error={error} />
        </div>
    )
}

Input.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    required: PropTypes.bool,
    type: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.instanceOf(Date),
    ]),
}

export default Input
