import React from 'react'
import {GetHeroesByPublisher} from '../../selectors/GetHeroesByPublisher'
import {HeroeCard} from './HeroeCard'


export const HeroeList = ({publisher}) => {

    const heroes = GetHeroesByPublisher(publisher)

    return  <div className="card-columns">
                {heroes.map(heroe => <HeroeCard key={heroe.id} {...heroe} />)}
            </div>
}

