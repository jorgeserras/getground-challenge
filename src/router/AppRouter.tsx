import React, { Suspense } from 'react'
import { Router, Switch, Redirect, Route, useLocation } from "react-router-dom"
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import history from "./history"

const Home = React.lazy(() => import('../views/Home'))
const Search = React.lazy(() => import('../views/Search'))

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
            <Header />
            <Switch>
                <Route
                    path='/'
                    exact
                    component={() => (
                        <Suspense fallback={<></>}>
                            <Home history={history} />
                        </Suspense>
                    )}
                />
                <Route
                    path='/search'
                    component={() => (
                        <Suspense fallback={<></>}>
                            <Search history={history} />
                        </Suspense>
                    )}
                />
                <Redirect to='/' />
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter