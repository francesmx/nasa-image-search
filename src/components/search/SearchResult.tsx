import { Box, Typography } from '@mui/material';
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
    <div key={item.data[0].nasa_id} style={{ display: 'inline-block' }}>
      <div
        style={{
          margin: '0 5px 20px 5px',
          border: 'solid 2px #ccc',
          borderRadius: 5,
        }}
      >
        <a href={`asset/${nasaId}`}>
          <Box>
            <Typography paragraph style={{ padding: 10, color: 'white' }}>
              {imageTitle}
            </Typography>
            <img style={{ padding: '0 10px 10px 10px' }} src={imageHref} alt="test" />
          </Box>
        </a>
      </div>
    </div>
  );
};
