import useState from 'react'
import React from 'react'


function SearchBar () {
const [searchText, setSearchText] = useState ("")


  function handleSearch (event){
    setSearchText (event.target.value)
  }

return
<div className='searchBox'>
 <input type="text" value={searchText} placeholder="Search Product" onChange={handleSearch}>
 </input>
<button></button>

</div>

}



export default SearchBar; 




