import React from 'react'
import { Link } from 'react-router-dom'


export const HeroeCard = ({id,superhero,publisher,alter_ego,first_appearance,characters}) => {

    return <div className="card ms-6">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="card-img" src={`./assets/heroes/${id}.jpg`} alt="Card image cap"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title"><strong>SuperHéroe: </strong>{superhero}</h5>
                            <p className="card-text"><strong>Publisher: </strong>{publisher}</p>
                            <p className="card-text"><strong>Alter Ego: </strong>{alter_ego}</p>
                            <p className="card-text"><strong>Primera Aparición: </strong>{first_appearance}</p>
                            <p className="card-text"><strong>Personaje: </strong>{characters}</p>
                            <Link to={`./heroe/${id}`}><button type="button" className="btn btn-primary">Show More</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            
}