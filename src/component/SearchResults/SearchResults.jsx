import { useSearch } from "../../context/SearchContext";
import './SearchResults.css';


function SearchResults(params) {

    const imageBaseUrl = "https://image.tmdb.org/t/p/original";

    const { flag, queryResult } = useSearch();
    return (
        <div className="search-results">
            {!flag && queryResult.map((movie) => {
                return (
                    <div key={movie.id} className="movie-card">
                        <img src={`${imageBaseUrl}${movie.poster_path}`} alt={movie.title} className="movie-poster" />
                    </div>
                )
            })}
        </div>
    );
}

export default SearchResults;