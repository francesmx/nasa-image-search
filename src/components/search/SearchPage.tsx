import { Header } from '../header/Header';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';

export const SearchPage: React.FC = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <SearchResults />
    </div>
  );
};
