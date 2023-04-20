import React, { useEffect, useState } from "react";
import './style.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";


const API_URL = 'http://www.omdbapi.com?apikey=64f0f7c7';



const App = () => {

    const [movies , SetMovies] =  useState( []);
   const searchMovies = async (title) => {

      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      SetMovies(data.Search);
   }

   useEffect(() => { searchMovies('thor'); }, []);

   return (
      <div className="app">
         <h1>MovieFlixZ</h1>

         <div className="search">
            <input
               placeholder="Search for moviez"
               value="thor"
               onChange={
                  () => { }
               }
            />
            <img
               src={SearchIcon}
               alt="searchicon"
               onClick={() => { }}

            />
         </div>

         {
        movies?.length>0 
            ?<div className="container">
             
             { movies.map ( (movie)=>(
               <MovieCard movie={movie} />
             ))
             }
        </div>  
         :
         ( 
            <div className="empty">
               <h2> No Movies found</h2>
            </div>
         )

         }

      

      </div>
   );
}

export default App;