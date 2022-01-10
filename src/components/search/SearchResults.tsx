import { SpecificMediaItem } from '../../shared/types';
import { SearchResult } from './SearchResult';

type SearchResultsProps = {
  items: Array<SpecificMediaItem>;
};

export const SearchResults: React.FC<SearchResultsProps> = ({ items }) => {
  return (
    <div
      style={{
        margin: '30px auto',
        padding: 0,
        columnCount: 5,
        width: '90vw',
        display: 'block',
      }}
    >
      {/* Need to make the column count responsive */}
      {items.map((item: SpecificMediaItem) => {
        return <SearchResult item={item} key={item.data[0].nasa_id} />;
      })}
    </div>
  );
};
