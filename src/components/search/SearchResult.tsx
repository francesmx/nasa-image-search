import { Box, Grid, Typography } from '@mui/material';
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
    <React.Fragment key={item.data[0].nasa_id}>
      <Grid
        item
        xs={2}
        sx={{
          margin: 2,
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: '#ccc',
          borderRadius: 2,
        }}
      >
        <a href={`asset/${nasaId}`}>
          <Box padding="5">
            <Typography paragraph style={{ padding: 10 }}>
              {imageTitle}
            </Typography>
            <img style={{ padding: 10 }} src={imageHref} alt="test" />
          </Box>
        </a>
      </Grid>
    </React.Fragment>
  );
};
