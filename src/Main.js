import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import { privateRoutes, publicRoutes } from './routes'




function Main() {
    return (
        <div>
            <Header />
            <Routes>
                {privateRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} exact />



                )}

                {publicRoutes.map(({ path, Component }) =>
                    <Route key={path} path={path} element={<Component />} exact={true} />


                )}
            </Routes>
        </div>
    )
}

export default Main
