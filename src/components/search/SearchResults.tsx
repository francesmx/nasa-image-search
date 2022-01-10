import { Grid } from '@mui/material';
import { SpecificMediaItem } from '../../shared/types';
import { SearchResult } from './SearchResult';

type SearchResultsProps = {
  items: Array<SpecificMediaItem>;
};

export const SearchResults: React.FC<SearchResultsProps> = ({ items }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{
        margin: 'auto',
        marginTop: 5,
      }}
    >
      {items.map((item: SpecificMediaItem) => {
        return <SearchResult item={item} key={item.data[0].nasa_id} />;
      })}
    </Grid>
  );
};
