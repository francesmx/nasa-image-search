import './SearchResults.css';
import { SpecificMediaItem } from '../../shared/types';
import { SearchResult } from './SearchResult';
import React, { useEffect, useState } from 'react';
import { useQuery } from '../../shared/hooks';
import { useFetchNasaAssetsQuery } from '../../api/NasaApiSlice';

export const SearchResults: React.FC = () => {
  // custom hook to help us get query params via react-router
  let query = useQuery();
  const [queryStringFromParams, setQueryStringToSearch] = useState<string>(' ');
  // skip says - don't make this API call just yet
  const [skip, setSkip] = useState(true);
  const { data, isFetching } = useFetchNasaAssetsQuery(queryStringFromParams, { skip });

  useEffect(() => {
    const q = query.get('q');
    if (q) {
      setQueryStringToSearch(q);
      setSkip(false);
    }
  }, [query]);

  return (
    <React.Fragment>
      {isFetching && <div>Loading...</div>}
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
