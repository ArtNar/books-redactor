import React, { PureComponent } from 'react'
import PropTypes                from 'prop-types'
import ErrorComponent           from 'components/Error'

export default class ErrorBoundary extends PureComponent {
    state = {
        error: null,
    }

    componentDidCatch(error, info) {
        console.error(error, info) // eslint-disable-line no-console

        this.setState({ error })
    }

    render() {
        const { children } = this.props
        const { error } = this.state

        if (error) {
            return (
                <ErrorComponent
                    title="Runtime error"
                    error={error}
                />
            )
        }

        return children
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node,
}
