import React,{createContext,useState} from 'react'

//create the context
export const MovieContext = createContext()

//include state in the context
export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {
            name:"Harry Potter",
            price:"$25",
            id:123564
        },
        {
            name:"Avengers",
            price:"$20",
            id:323564
        }, 
        {
            name:"50 Shades",
            price:"$25",
            id:129664
        },
    ])
    return (
       <MovieContext.Provider value={[movies,setMovies]}>
           {/* the components are the children */}
           {props.children}
       </MovieContext.Provider>
    )
}