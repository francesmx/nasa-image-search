import './SearchResults.css';
import { SpecificMediaItem } from '../../shared/types';
import { SearchResult } from './search-result/SearchResult';
import React, { useEffect, useState } from 'react';
import { useFetchNasaAssetsQuery } from '../../api/NasaApiSlice';
import { LoadingMessage } from '../loading-message/LoadingMessage';
import { useSearchParams } from 'react-router-dom';

export const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const queryParam = String(searchParams.get('q'));
  const [skip, setSkip] = useState(true); // skip means don't make API call yet
  const { data, isFetching } = useFetchNasaAssetsQuery(queryParam, { skip });

  useEffect(() => {
    // the presence of a query param dictates whether the API call is made
    if (queryParam !== 'null') {
      setSkip(false);
    }
  }, [queryParam]);

  return (
    <React.Fragment>
      {isFetching && <LoadingMessage />}
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
