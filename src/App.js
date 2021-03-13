import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/movieList';
import Heading from './components/Heading';
import Search from './components/Search';
//http://www.omdbapi.com/s=funny&apikey=321a95e5
function App() {
  const [movies, setMovies] = useState([])
  const [searching, setSearching] = useState('')

  const getMovies = async() =>{
    const url = 'http://www.omdbapi.com/?s=lip&apikey=321a95e5'
    const response = await fetch(url);
    const jsonResponse= await response.json();
    if(jsonResponse){
      return setMovies(jsonResponse.Search)
    }
    
  }

  useEffect(()=>{
    getMovies();
  },[])
  
  return (
    <div className="container-fluid mm-app">
      <div className="row m-4">
        <Heading heading="Movies" />
        <Search searching={searching} setSearching={setSearching}/>
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default App;
