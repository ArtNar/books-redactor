import React, { Suspense }  from 'react'
import PropTypes            from 'prop-types'
import { Preloader }        from 'components/Preloader'
import ErrorBoundary        from 'components/ErrorBoundary'
import { Layout }           from 'components/Layout'

const Page = ({
    settings: {
        component: Component,
        title,
    },
    routerProps,
}) => (
    <Suspense
        fallback={<Preloader />}
        ms={1000}
    >
        <Layout
            title={title}
        >
            <ErrorBoundary>
                <Component
                    {...routerProps}
                />
            </ErrorBoundary>
        </Layout>
    </Suspense>
)

Page.propTypes = {
    routerProps: PropTypes.shape({}),
    settings: PropTypes.shape({
        component: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.object,
        ]),
        title: PropTypes.string,
    }),
}

export default Page
