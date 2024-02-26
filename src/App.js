import Main from './component/Main';
import Home from './component/Pages/Home/Home';
import NotFound from './component/Pages/NotFound/NotFound';
import Search from './component/Pages/Search/Search';
import { SearchProvider } from './context/SearchContext';
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <SearchProvider >
        <BrowserRouter >
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/search/:query" component={Search} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </SearchProvider>
    </div>

  );
}

export default App;
