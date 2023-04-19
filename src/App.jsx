import React, { useEffect } from "react";
import './style.css';
import SearchIcon from './search.svg';


const API_URL = 'http://www.omdbapi.com?apikey=64f0f7c7';

const movie1 = 
    {Title: 'Thor',
     Year: '2011',
    imdbID: 'tt0800369', 
    Type: 'movie', 
    Poster: "n/a"


}

const App = () => {
    const searchMovies  = async( title) => {

        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log( data.Search);
     }

    useEffect(   ( ) => { searchMovies('thor'); } , [ ]);

    return(
 <div className="app">
   <h1>MovieFlixZ</h1>

   <div className="search"> 
     <input 
     placeholder="Search for moviez"
     value="thor"
     onChange={
        ()=>{ }
     }
     />  
     <img 
      src={SearchIcon}
      alt="searchicon"
      onClick={  ()=> { }}

      />
    </div>

    <div className="container">
          <div className="movie"></div>

    </div>

 </div>
    );
}

export  default App;