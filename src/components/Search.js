import React from 'react';

function Search(props){
    return(
        <div className="col col-md-2">
            <input 
                className="form-control" 
                placeholder="Search here!" 
                value={props.value}
                onChange={(evt) => props.setSearching(evt.target.value)} 
            ></input>
        </div>
    )
}
export default Search;