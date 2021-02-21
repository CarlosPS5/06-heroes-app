import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { GetHeroesById } from '../../selectors/GetHeroesById'


export const HeroeScreen = ({history}) => {

    const {heroeId} = useParams()
    
    const heroe = useMemo(() => GetHeroesById(heroeId), [heroeId] ) 

    if(!heroe) {
        return <Redirect to="/" />
    }

    const handleClick = () => {
        if(history.length <= 2) {
            history.push("/")
        }
        history.goBack()
    }

    return  <>
                <h1>Heroe Screen</h1>
                <hr/>
                
                <div className="row">
                    <div className="col-sm-6">
                        <img className="w-50 h-70" src={`../assets/heroes/${heroeId}.jpg`} />
                    </div>
                    <div className="col-sm-6">
                    <h5 className="card-title"><strong>SuperHéroe: </strong>{heroe.superhero}</h5>
                            <p className="card-text"><strong>Publisher: </strong>{heroe.publisher}</p>
                            <p className="card-text"><strong>Alter Ego: </strong>{heroe.alter_ego}</p>
                            <p className="card-text"><strong>Primera Aparición: </strong>{heroe.first_appearance}</p>
                            <p className="card-text"><strong>Personaje: </strong>{heroe.characters}</p>
                            <button type="button" onClick={handleClick} className="btn btn-primary">Go Back</button>
                    </div>
                </div>

            </>
}