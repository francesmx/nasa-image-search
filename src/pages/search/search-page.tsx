import React from 'react';
import { Header } from '../../components/header/header';
import { SearchBar } from '../../components/search-bar/search-bar';
import { SearchResults } from '../../components/search-results/search-results';

export const SearchPage: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <SearchBar />
      <SearchResults />
    </React.Fragment>
  );
};
