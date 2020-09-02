import React                from 'react'
import { Switch, Route }    from 'react-router-dom'
import PropTypes            from 'prop-types'
import Page                 from './Page'

const Router = ({ routes }) => (
    <Switch>
        {routes.map((route) => (
            <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
            >
                {(props) => (
                    <Page
                        routerProps={props}
                        settings={route}
                    />
                )}
            </Route>
        ))}
    </Switch>
)

Router.propTypes = {
    routes: PropTypes.arrayOf(
        PropTypes.shape({}),
    ),
}

export default Router
