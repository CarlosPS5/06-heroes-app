import React from 'react'
import { Navbar } from '../components/ui/Navbar';
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { DCScreen } from '../components/dc/DCScreen'
import { HeroeScreen } from '../components/heroes/HeroeScreen'
import { SearchScren } from '../components/search/SearchScreen';    
import {
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";



export const DashboardRoutes = () => {

    return(
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component = {MarvelScreen} />
                    <Route exact path="/heroe/:heroeId" component = {HeroeScreen} />
                    <Route exact path="/dc" component = {DCScreen}/>
                    <Route exact path="/search" component = {SearchScren} />

                    <Redirect to="/marvel" />
                </Switch>
            </div>

        </>
    )
}