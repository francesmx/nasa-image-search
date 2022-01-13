import './SearchResults.css';
import { SpecificMediaItem } from '../../shared/types';
import { SearchResult } from './search-result/SearchResult';
import React, { useEffect, useState } from 'react';
import { useQuery } from '../../shared/hooks';
import { useFetchNasaAssetsQuery } from '../../api/NasaApiSlice';

export const SearchResults: React.FC = () => {
  const queryParams = useQuery(); // gets query params via react-router
  const [skip, setSkip] = useState(true); // skip means don't make API call yet (RTK Query)
  const [queryStringFromParams, setQueryStringToSearch] = useState<string>(' ');
  const { data, isFetching } = useFetchNasaAssetsQuery(queryStringFromParams, { skip });

  useEffect(() => {
    // the presence of a query param dictates whether the API call is made
    const q = queryParams.get('q');
    if (q) {
      setQueryStringToSearch(q);
      setSkip(false);
    }
  }, [queryParams]);

  // TODO Handle no images being returned
  return (
    <React.Fragment>
      {isFetching && <div style={{ margin: 30 }}>Loading...</div>}
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
