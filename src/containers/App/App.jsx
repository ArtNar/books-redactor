import React                    from 'react'
import Router                   from 'router'
import { BrowserRouter }        from 'react-router-dom'
import { routes }               from 'router/routes'

const App = () => (
    <BrowserRouter>
        <Router routes={routes} />
    </BrowserRouter>
)

export default App
