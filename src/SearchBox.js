import React from 'react'; 

const SearchBox = ({onSearchChange}) => {
    return (
        <div>
            <input type="text" placeholder="search robots" onChange={onSearchChange} /> 
        </div>
    )
}

export default SearchBox; 