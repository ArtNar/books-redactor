import React            from 'react'
import PropTypes        from 'prop-types'
import { Preloader }    from 'components/Preloader'
import _cn              from 'utils/cn'
import styles           from './LoadingState.module.css'

const cn = _cn('loader', styles)

const LoadingState = ({
    children,
    error,
    loading,
}) => (
    <div className={cn()}>
        { (error && (
            <div className={cn('error')}>
                Ошибка загрузки:
                <br />
                {error}
            </div>
        ))
    || (loading && (
        <div className={cn('fallback')}>
            <Preloader />
        </div>
    ))
    || children}
    </div>
)

LoadingState.propTypes = {
    children: PropTypes.node,
    error: PropTypes.string,
    loading: PropTypes.bool,
}

export default LoadingState
