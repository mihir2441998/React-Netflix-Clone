import { createContext, useContext, useState } from "react";
import axios from '../config/axios';
import requests from '../requests/request';

export const useSearch = () => {
    return useContext(SearchContext);
}
const SearchContext = createContext();
export const SearchProvider = ({ children }) => {

    const [query, setQuery] = useState('');
    const [flag, setFlag] = useState(true);
    const [queryResult, setQueryResult] = useState([]);

    const searchEndpoint = requests.filter(request => request.type === 'search')[0];

    const search = () => {
        console.log('Endpoint', `${searchEndpoint.apiEndpoint}&query=${query}`);
        axios.get(`${searchEndpoint.apiEndpoint}&query=${query}`).then((response) => {
            setQueryResult(response.data.results);
            setFlag(!flag);
        })
    }

    return (
        <SearchContext.Provider value={{ flag, queryResult, query, setFlag, setQueryResult, setQuery, search }}>
            {children}
        </SearchContext.Provider>
    );
}