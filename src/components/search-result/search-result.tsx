import './search-result.css';
import { Typography } from '@mui/material';
import React from 'react';
import { SpecificMediaItem } from '../../shared/types';
import { Link } from 'react-router-dom';

type SearchResultProps = {
  item: SpecificMediaItem;
};

export const SearchResult: React.FC<SearchResultProps> = ({ item }) => {
  const nasaId = item.data[0].nasa_id;
  const imageTitle = item.data[0].title;
  const imageHref = item.links[0].href;

  return (
    <li key={item.data[0].nasa_id} className="imageListItem">
      <Link to={`../asset/${nasaId}`}>
        <div className="searchResult">
          <img src={imageHref} alt={imageTitle} />
          <Typography className="searchResultTitle">{imageTitle}</Typography>
        </div>
      </Link>
    </li>
  );
};
