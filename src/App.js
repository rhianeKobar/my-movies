import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import Heading from "./components/Heading";
import Search from "./components/Search";
import addFave from "./components/addFaves";
import removeFave from "./components/removeFave";

//http://www.omdbapi.com/s=funny&apikey=321a95e5

function App() {
  const [movies, setMovies] = useState([]);
  const [searching, setSearching] = useState("");
  const [faves, setFaves] = useState([]);

  const getMovies = async (searching) => {
    const url = `http://www.omdbapi.com/?s=${searching}&apikey=321a95e5`;
    const response = await fetch(url);
    const jsonResponse = await response.json();
    if (jsonResponse.Search) {
      setMovies(jsonResponse.Search);
    }
  };

  useEffect(() => {
    getMovies(searching);
  }, [searching]);

  useEffect(() => {
    const myFavs = JSON.parse(localStorage.getItem("save-my-favourite-movies"));

    if (myFavs) {
      setFaves(myFavs);
    }
  }, []);

  const storeLocally = (faves) => {
    localStorage.setItem("save-my-favourite-movies", JSON.stringify(faves));
  };

  const addToFaves = (movie) => {
    const newFaves = [...faves, movie];
    setFaves(newFaves);
    storeLocally(newFaves);
  };

  const removeFromFaves = (movie) => {
    const newFaveList = faves.filter((fave) => fave.imdbID !== movie.imdbID);
    setFaves(newFaveList);
    storeLocally(newFaveList);
  };

  return (
    <div className="container-fluid mm-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Heading heading="Movies" />
        <Search searching={searching} setSearching={setSearching} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          favourite={addFave}
          handleClick={addToFaves}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Heading heading="Faves" />
      </div>
      <div className="row">
        <MovieList
          movies={faves}
          favourite={removeFave}
          handleClick={removeFromFaves}
        />
      </div>
    </div>
  );
}
//making sure this pushes
export default App;
