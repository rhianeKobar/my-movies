import React from 'react'

function MovieList(props){
    return(
        <>
            {
                props.movies.map((movie,idx) =>{
                    return (
                      <div className=" d-flex justify-content-start m-3">
                        <img
                          src={movie.Poster}
                          alt={movie.Title}
                          key={movie.idx}
                        ></img>
                      </div>
                    );
                })
            }
        </>
    )
}

export default MovieList;