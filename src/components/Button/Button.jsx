/* eslint-disable react/button-has-type */
import React            from 'react'
import PropTypes        from 'prop-types'
import { Preloader }    from 'components/Preloader'
import cx               from 'classnames'
import _cn              from 'utils/cn'
import styles           from './Button.module.css'

const cn = _cn('button', styles)

const Button = ({
    name,
    className,
    disabled,
    children,
    type = 'button',
    inProgress,
    onClick,
    ...rest
}) => (
    <button
        {...rest}
        type={type}
        className={cx(cn({
            disabled,
        }), className)}
        name={name}
        disabled={disabled}
        onClick={onClick}
    >
        <div
            key="content"
            className={cn('content')}
        >
            {inProgress
                ? <Preloader className={cn('spin')} />
                : (
                    <span
                        key="text"
                        className={cn('item')}
                    >
                        {children}
                    </span>
                )}
        </div>
    </button>
)

Button.propTypes = {
    disabled: PropTypes.bool,
    inProgress: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
