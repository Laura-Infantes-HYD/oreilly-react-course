import React, {useState} from 'react'

const SearchBarForm = ({onSearch}) => {

    const [searchTerm, setSearchTerm] = useState("")
    const searchHandler = (e)=>{ setSearchTerm(e.target.value);}
    const submitHandler = (e)=>{ e.preventDefault(); console.log(searchTerm); onSearch(searchTerm)}

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="searchBar">Search</label>
                <input type="text" name="search" id="searchBar" value={searchTerm} onChange={searchHandler}/>
                <button type="submit">Search</button>
                <div>{searchTerm}</div>
            </form>
        </div>
    )
}

export default SearchBarForm
