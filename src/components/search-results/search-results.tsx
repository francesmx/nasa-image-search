import './search-results.css';
import { SpecificMediaItem } from '../../shared/types';
import { SearchResult } from '../search-result/search-result';
import React, { useEffect, useState } from 'react';
import { useFetchNasaAssetsQuery } from '../../api/NasaApiSlice';
import { LoadingMessage } from '../loading-message/loading-message';
import { useQuery } from '../../shared/hooks';

export const SearchResults = () => {
  let query = useQuery();
  const queryParam = String(query.get('q'));
  const [skip, setSkip] = useState(true); // skip means don't make API call yet
  const { data, isFetching, isError } = useFetchNasaAssetsQuery(queryParam, { skip });

  useEffect(() => {
    // the presence of a query param dictates whether the API call is made
    if (queryParam !== 'null') {
      setSkip(false);
    }
  }, [queryParam]);

  return (
    <React.Fragment>
      {isFetching && <LoadingMessage />}
      {isError && <div>Something went wrong when retrieving results</div>}
      {data && (
        <ul className="searchResults">
          {data.collection?.items?.map((item: SpecificMediaItem) => {
            return <SearchResult item={item} key={item.data[0].nasa_id} />;
          })}
        </ul>
      )}
    </React.Fragment>
  );
};
