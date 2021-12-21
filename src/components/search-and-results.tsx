import React, { useState } from 'react';
import logo from './nasa-logo.png';
import {
  Typography,
  InputAdornment,
  FormControl,
  InputLabel,
  Input,
  IconButton,
  Grid,
  Box,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useFetch from 'use-http';

type SpecificMediaItem = {
  data: [
    {
      center: string;
      date_created: string; // "1969-07-21T00:00:00Z"
      description: string;
      keywords: string[];
      media_type: string;
      nasa_id: string;
      title: string;
    }
  ];
  href: string;
  links: [
    {
      href: string;
      rel: string;
      render: string;
    }
  ];
};

export const SearchAndResults: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const URL = `https://images-api.nasa.gov/search?&media_type=image&q=${searchInput}`;
  const [request, response] = useFetch(URL);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleClick = () => {
    request.get();
  };

  return (
    <div>
      <img src={logo} alt="NASA logo" />
      <Typography variant="h4">NASA Image, Video &amp; Audio Library</Typography>
      <FormControl sx={{ m: 1, width: '75ch', marginTop: 10 }} variant="outlined" color="primary">
        <InputLabel sx={{ fontSize: '1.2rem', color: 'white' }} htmlFor="standard-adornment-search">
          What would you like to see?
        </InputLabel>
        <Input
          sx={{
            background: 'black',
            color: 'white',
            fontSize: '1.2rem',
            padding: 2,
            border: 'solid 1px white',
            borderRadius: 2,
          }}
          id="standard-adornment-search"
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="search" onClick={handleClick}>
                <SearchIcon fontSize="large" color="primary" />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={{
          margin: 'auto',
          marginTop: 5,
        }}
      >
        {request.loading
          ? 'Loading...'
          : response.data?.collection?.items?.map((item: SpecificMediaItem) => {
              const nasaId = item.data[0].nasa_id;
              const imageTitle = item.data[0].title;
              const imageHref = item.links[0].href;
              return (
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
              );
            })}
      </Grid>
    </div>
  );
};
