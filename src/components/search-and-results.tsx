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
          sx={{ background: 'grey', color: 'white', padding: 2 }}
          id="standard-adornment-search"
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="search" onClick={handleClick}>
                <SearchIcon />
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
              return (
                <Grid
                  item
                  xs={2}
                  sx={{
                    margin: 2,
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderColor: '#ccc',
                  }}
                >
                  <Box>
                    <Typography variant="body1" style={{ padding: 20 }}>
                      {item.data[0].title}
                    </Typography>
                    <img src={item.links[0].href} alt="test" />
                  </Box>
                </Grid>
              );
            })}
      </Grid>
    </div>
  );
};
