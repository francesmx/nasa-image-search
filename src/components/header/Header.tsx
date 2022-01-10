import { Typography } from '@mui/material';
import logo from '../../assets/images/nasa-logo.png';

export const Header: React.FC = () => {
  return (
    <div>
      <img src={logo} alt="NASA logo" />
      <Typography variant="h4">NASA Image, Video &amp; Audio Library</Typography>
    </div>
  );
};
