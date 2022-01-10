import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SearchPage } from './components/search/SearchPage';
import { MediaAsset } from './components/media-asset/MediaAsset';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="search/:query" element={<SearchPage />} />
        <Route path="asset/:id" element={<MediaAsset />} />
      </Routes>
    </div>
  );
}

export default App;
