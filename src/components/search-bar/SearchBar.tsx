import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useQuery } from '../../shared/hooks';

export const SearchBar: React.FC = () => {
  const [searchBarInput, setSearchBarInput] = useState('');
  const navigate = useNavigate();
  const queryParams = useQuery(); // gets query params via react-router
  const paramsToBeAppended = new URLSearchParams(); // so we can append query to URL

  useEffect(() => {
    // if user navigates to a page with a query param, set search bar to contain param
    const q = queryParams.get('q');
    if (q) {
      setSearchBarInput(q);
    }
  }, [queryParams]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBarInput(event.target.value);
  };

  const handleClick = () => {
    paramsToBeAppended.append('q', searchBarInput);
    navigate({ search: paramsToBeAppended.toString() });
  };

  return (
    <React.Fragment>
      <FormControl sx={{ width: '60vw' }} variant="outlined" color="primary">
        <InputLabel sx={{ fontSize: '1rem', color: 'white' }} htmlFor="standard-adornment-search">
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
