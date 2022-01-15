import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useQuery } from '../../shared/hooks';

export const SearchBar = () => {
  const [searchBarInput, setSearchBarInput] = useState('');
  const history = useHistory();
  let query = useQuery();
  const queryString = String(query.get('q'));

  useEffect(() => {
    // if user navigates to page with query param, set search bar to reflect that
    if (queryString !== 'null') {
      setSearchBarInput(queryString);
    }
  }, [queryString]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBarInput(event.target.value);
  };

  const handleClick = () => {
    history.push(`../search/?q=${searchBarInput}`);
  };

  return (
    <React.Fragment>
      <FormControl sx={{ width: '60vw' }} variant="outlined" color="primary">
        <InputLabel sx={{ fontSize: '1rem', color: 'white' }} htmlFor="search-bar">
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
          id="search-bar"
          type="text"
          value={searchBarInput}
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
    </React.Fragment>
  );
};
