import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { SearchResults } from './SearchResults';
import { useFetchNasaAssetsQuery } from '../../api/NasaApiSlice';
import { useQuery } from '../../shared/hooks';

export const SearchBarAndResults: React.FC = () => {
  // keeps track of what the user is typing
  const [searchBarInput, setSearchBarInput] = useState('');

  // the query string from the URL parameter
  const [queryStringToSearch, setQueryStringToSearch] = useState<string | null>(' ');

  // skip says - don't make this API call just yet
  const [skip, setSkip] = useState(true);

  const { data, isFetching } = useFetchNasaAssetsQuery(queryStringToSearch, { skip });
  const navigate = useNavigate();
  let query = useQuery();
  const params = new URLSearchParams();

  useEffect(() => {
    let q = query.get('q');
    if (q) {
      setQueryStringToSearch(q);
      setSearchBarInput(q);
      setSkip(false);
    }
  }, [query]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBarInput(event.target.value);
  };

  const handleClick = () => {
    params.append('q', searchBarInput);
    navigate({ search: params.toString() });
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
      {isFetching && <div>Loading...</div>}
      {data && <SearchResults items={data.collection?.items} />}
    </React.Fragment>
  );
};
