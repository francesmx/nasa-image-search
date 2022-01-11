import './SearchResult.css';
import { Typography } from '@mui/material';
import React from 'react';
import { SpecificMediaItem } from '../../shared/types';

type SearchResultProps = {
  item: SpecificMediaItem;
};

export const SearchResult: React.FC<SearchResultProps> = ({ item }) => {
  const nasaId = item.data[0].nasa_id;
  const imageTitle = item.data[0].title;
  const imageHref = item.links[0].href;

  return (
    <li key={item.data[0].nasa_id} style={{ display: 'inline-block' }}>
      <a href={`asset/${nasaId}`}>
        <div className="searchResult">
          <Typography className="searchResultTitle">{imageTitle}</Typography>
          <img style={{ padding: '0 10px 10px 10px' }} src={imageHref} alt="test" />
        </div>
      </a>
    </li>
  );
};
