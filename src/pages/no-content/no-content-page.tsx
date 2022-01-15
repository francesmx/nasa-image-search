import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/header/header';

export const NoContentPage: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <p style={{ padding: '1rem' }}>No content matches this URL.</p>
      <Link to={'/'} style={{ color: 'white' }}>
        Go to homepage
      </Link>
    </React.Fragment>
  );
};
