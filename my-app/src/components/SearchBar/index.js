function SearchBar(props) {


function handleSearch (event){
props.setSearchText(event.target.value);
}

return (
<div className='searchBox'>
<input type="text" value={props.searchText} placeholder="Search Product" onChange={handleSearch} />
</div>
)
}

export default SearchBar;



