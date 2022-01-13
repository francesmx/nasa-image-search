import React from 'react';
import { Header } from '../components/header/Header';
import { SearchBar } from '../components/search-bar/SearchBar';
import { SearchResults } from '../components/search-results/SearchResults';

export const SearchPage: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <SearchBar />
      <SearchResults />
    </React.Fragment>
  );
};
