import React, { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { heroes } from '../../data/heroes'
import { HeroeCard } from '../heroes/HeroeCard'
import { useForm } from '../hooks/useForm'
import queryString from 'query-string'
import { GetHeroesByName } from '../../selectors/GetHeroesByName'


export const SearchScren = ({history}) => {

    const location = useLocation()
    const {q = ''} = queryString.parse(location.search)
    

    const [formValues,handleInputChange,reset] = useForm({
        searchText: q
    })

    const {searchText} = formValues

    const heroesFiltered = useMemo(() => GetHeroesByName(q), [q] ) 

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`?q=${searchText}`)
        reset()
    }



    return  <>
                <h1>Search Screen</h1>
                <hr/>

                <div className="row">
                    <div className="col-4">
                        <h4>Search Form</h4>
                        <form onSubmit={handleSubmit}>
                            <input type="text"
                            placeholder="Find Heroe"
                            className="Form Control"
                            autoComplete="off"
                            onChange={handleInputChange}
                            name="searchText"
                            value={searchText}
                            />

                            <button type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                            >Search...
                            </button>
                        </form>


                    </div>
                    <div className="col-8">
                        <h4>Resultados</h4>
                        <hr/>
                       {q==''? <div className="alert alert-info">Search a Heroe</div> : heroesFiltered.length == 0? <div className="alert alert-warning">No results</div> : false } 
                    
                        {heroesFiltered.map(heroe => <HeroeCard key={heroe.id} {...heroe} />)}
                    </div>
                </div>

                </>
}