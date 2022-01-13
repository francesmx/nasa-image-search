import { Typography } from '@mui/material';
import LoaderGif from '../../images/loader.gif';

export const LoadingMessage = () => {
  return (
    <div
      style={{
        margin: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img src={LoaderGif} alt="Loading" width="100" height="100" />
      <Typography style={{ marginTop: 20 }}>Loading...</Typography>
    </div>
  );
};
