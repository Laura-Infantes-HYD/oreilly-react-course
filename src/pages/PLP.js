import React, {useState} from 'react'
import ProductList from '../components/organisms/ProductList'
import SearchBar from '../components/organisms/Searchbar'

const PLP = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (data)=>{setSearchTerm(data)}

  return (
    <div>
      <SearchBar onSearch={handleSearch}/>
      <ProductList searchTerm={searchTerm} />
      <p>Search term in PLP is {searchTerm}</p>
    </div>
  )
}

export default PLP
