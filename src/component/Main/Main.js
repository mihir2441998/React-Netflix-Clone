import requests from "../../requests/request";
import Banner from "../Banner";
import Nav from "../Nav";
import Row from "../Row";
import SearchResults from "../SearchResults";
import { useSearch } from "../../context/SearchContext";


function Main() {

    const { flag } = useSearch();

    const rowRequests = requests.filter(request => request.type !== "search");
    return (<>
        <Nav />
        {flag && <Banner />}
        {flag &&
            rowRequests.map(request => {
                return <Row
                    key={request.id}
                    id={request.id}
                    title={request.title}
                    apiEndpoint={request.apiEndpoint}
                    isLarge={request.isLarge} />
            })
        }
        {!flag && <SearchResults />}
    </>);

}

export default Main;