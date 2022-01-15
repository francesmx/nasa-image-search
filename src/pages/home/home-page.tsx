import { Header } from '../../components/header/header';
import { SearchBar } from '../../components/search-bar/search-bar';

export const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <SearchBar />
    </div>
  );
};
