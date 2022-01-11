import './SearchResults.css';
import { SpecificMediaItem } from '../../shared/types';
import { SearchResult } from './SearchResult';

type SearchResultsProps = {
  items: Array<SpecificMediaItem>;
};

export const SearchResults: React.FC<SearchResultsProps> = ({ items }) => {
  return (
    <div className="searchResults">
      {items.map((item: SpecificMediaItem) => {
        return <SearchResult item={item} key={item.data[0].nasa_id} />;
      })}
    </div>
  );
};
