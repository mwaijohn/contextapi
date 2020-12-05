import React,{useContext,useState} from 'react'
import {MovieContext} from './MovieContext'

export default function Nav() {
    //use the context
    const [movies,setMovies] = useContext(MovieContext)
    return (
        <div className="nav">
            <div>
                ContextApi
            </div>
            <div>
                Movies: {movies.length}
            </div>
        </div>
    )
}
