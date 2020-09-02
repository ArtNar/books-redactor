import React                    from 'react'
import Router                   from 'router'
import { HashRouter }           from 'react-router-dom'
import { routes }               from 'router/routes'

const App = () => (
    <HashRouter basename="/">
        <Router routes={routes} />
    </HashRouter>
)

export default App
