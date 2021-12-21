import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Asset } from './components/asset';
import { SearchAndResults } from './components/search-and-results';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchAndResults />} />
        <Route path="search" element={<SearchAndResults />} />
        <Route path="asset/:id" element={<Asset />} />
      </Routes>
    </div>
  );
}

export default App;
