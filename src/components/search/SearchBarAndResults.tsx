import React, { useEffect } from 'react';
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { SearchResults } from './SearchResults';
import { useFetchNasaAssetsQuery } from '../../api/NasaApiSlice';

export const SearchBarAndResults: React.FC = () => {
  const [searchInput, setSearchInput] = useState('');
  const [skip, setSkip] = useState(true);
  const { data, isFetching } = useFetchNasaAssetsQuery(searchInput, { skip });

  useEffect(() => {
    if (data) {
      setSkip(true);
    }
  }, [data]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleClick = () => {
    setSkip(false);
  };

  return (
    <React.Fragment>
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
      {isFetching && <div>Loading...</div>}
      {data && <SearchResults items={data.collection?.items} />}
    </React.Fragment>
  );
};
