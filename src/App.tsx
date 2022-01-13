import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SearchPage } from './pages/SearchPage';
import { AssetPage } from './pages/AssetPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="search/:query" element={<SearchPage />} />
        <Route path="asset/:id" element={<AssetPage />} />
      </Routes>
    </div>
  );
}

export default App;
