import './App.css';
import { Route, Switch } from 'react-router-dom';
import { SearchPage } from './pages/search/search-page';
import { AssetPage } from './pages/asset/asset-page';
import { HomePage } from './pages/home/home-page';
import { NoContentPage } from './pages/no-content/no-content-page';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/search/:query">
          <SearchPage />
        </Route>
        <Route path="/asset/:id">
          <AssetPage />
        </Route>
        <Route>
          <NoContentPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
