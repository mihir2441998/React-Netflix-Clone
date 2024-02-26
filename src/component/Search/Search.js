import { useState } from 'react';
import './Search.css';
import { useSearch } from '../../context/SearchContext';
import { useHistory } from 'react-router-dom';

function Search(params) {

    const { flag, query, setFlag, setQuery, search, setQueryResult } = useSearch();
    const history = useHistory();

    const handleSearch = () => {
        if (query) {
            search();
            history.push(`/search/${encodeURIComponent(query)}`);
        }
    }

    const handleCancel = () => {
        setFlag(!flag);
        setQuery('');
        setQueryResult([]);
        history.push('/');
    }

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    }

    return (
        <div className="search-form">
            <input className='search-input'
                type="text"
                placeholder="Find a Movie"
                value={query}
                onChange={handleQueryChange}
            />
            {flag && <button className="search-button"
                onClick={handleSearch}>Search</button>}
            {!flag && <button className="cancel-button"
                onClick={handleCancel}>X</button>}

        </div>
    );
}

export default Search;