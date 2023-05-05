import { useState } from 'react'

function SearchBar(props) {
const [searchText, setSearchText] = useState("")

function handleSearch (event){
setSearchText(event.target.value);
props.setSearchText(event.target.value);
}

return (
<div className='searchBox'>
<input type="text" value={searchText} placeholder="Search Product" onChange={handleSearch} />
<button></button>
</div>
)
}

export default SearchBar;



