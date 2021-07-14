import React, {useState} from 'react';
import SearchbarForm from "../molecules/SearchBarForm"

const Searchbar = ({onSearch}) => {

    const [searchTerm, setSearchTerm] = useState("")
    const handleSearchInput = (data)=>{setSearchTerm(data); onSearch(searchTerm)}

    return (
        <div>
            <SearchbarForm onSearch={handleSearchInput}/>
            <p>Search term is {searchTerm}</p>
        </div>
    )
}

export default Searchbar
