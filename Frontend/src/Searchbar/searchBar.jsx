
import '../Searchbar/searchBar.css';
function SearchBar() {
  return (
    <div className="search-container">
      <input type="search" placeholder="Search..." />
      <img src="./images/search.png" alt="search" />
    </div>
  );
}

export default SearchBar;