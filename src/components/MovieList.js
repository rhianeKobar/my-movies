import React from 'react'

function MovieList(props){
  const FavouriteThis = props.favourite;
    return(
        <>
            {
                props.movies.map((movie,idx) =>{
                    return (
                      <div className="d-flex justify-content-start m-3 image-container">
                        <img
                          src={movie.Poster}
                          alt={movie.Title}
                          key={idx}
                        ></img>
                        <div onClick={()=> props.handleClick(movie)} className="overlay d-flex align-items-center justify-content-center">
                          <FavouriteThis />
                        </div>
                      </div>
                    );
                })
            }
        </>
    )
}

export default MovieList;