import React from 'react'
import '../../styles/scss/content.scss'
import {Switch,Route} from "react-router-dom"
import Dashboard from '../../dashboard/dashboard'
import NotFound from './notFound'

function Content(){
    return (
        <main className={"content"}>
            <Switch>
                <Route exact path={"/"}>
                    <Dashboard/>
                </Route>
                <Route path ={"*"}>
                    <NotFound/>
                </Route>
            </Switch>

        </main>

    )
}

export default Content;
