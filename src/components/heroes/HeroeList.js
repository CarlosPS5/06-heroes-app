import React, { useMemo } from 'react'
import {GetHeroesByPublisher} from '../../selectors/GetHeroesByPublisher'
import {HeroeCard} from './HeroeCard'


export const HeroeList = ({publisher}) => {


    const heroes = useMemo(() => GetHeroesByPublisher(publisher), [publisher] ) 

    return  <div className="card-columns animate_animated animate_fadeIn">
                {heroes.map(heroe => <HeroeCard key={heroe.id} {...heroe} />)}
            </div>
}

