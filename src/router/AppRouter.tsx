import React, { Suspense } from 'react'
import { Router, Switch, Redirect, Route, useLocation } from "react-router-dom"
import history from "./history"

const Home = React.lazy(() => import('../views/Home'))

function ScrollToTop() { /* Scroll to top of page */
    const { pathname } = useLocation()

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}

const AppRouter: React.FC = () => {
    return (
        <Router history={history}>
            <ScrollToTop />
            <Switch>
                <Route
                    path='/'
                    exact
                    component={() => (
                        <>

                            <Suspense fallback={<></>}>
                                <Home />
                            </Suspense>
                        </>
                    )}
                />
                <Route
                    path='/search?q=:s'
                    exact
                    component={() => (
                        <>
                            <Suspense fallback={<></>}>
                                <Home />
                            </Suspense>
                        </>
                    )}
                />
                <Redirect to='/' />
            </Switch>
        </Router>
    )

}

export default AppRouter