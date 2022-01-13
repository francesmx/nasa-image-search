import React from 'react';
import { Typography } from '@mui/material';

interface AssetProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const Asset: React.FC<AssetProps> = ({ title, description, imageUrl }) => {
  return (
    <div style={{ width: '80vw', margin: 'auto', display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h2" style={{ fontSize: '2.5rem' }}>
        {title}
      </Typography>
      <Typography variant="body1" style={{ margin: 20, textAlign: 'left' }}>
        {description}
      </Typography>
      <img
        src={imageUrl}
        alt={title}
        style={{ margin: 20, border: 'solid 10px #333', borderRadius: 5 }}
      />
    </div>
  );
};
