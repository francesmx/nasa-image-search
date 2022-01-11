import { Typography } from '@mui/material';
import logo from '../../assets/images/nasa-logo.png';

export const Header: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px 0px',
      }}
    >
      <a href="/search">
        <img src={logo} alt="NASA logo" style={{ margin: '20px 1  0px' }} />
      </a>
      <Typography variant="h1" style={{ fontSize: '2rem' }}>
        NASA Image, Video &amp; Audio Library
      </Typography>
    </div>
  );
};
