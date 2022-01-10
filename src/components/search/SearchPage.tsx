import { Header } from '../header/Header';
import { SearchBarAndResults } from './SearchBarAndResults';

export const SearchPage: React.FC = () => {
  return (
    <div>
      <Header />
      <SearchBarAndResults />
    </div>
  );
};
