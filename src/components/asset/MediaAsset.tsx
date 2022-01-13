import React from 'react';
import { useParams } from 'react-router';
import { Typography } from '@mui/material';
import { useFetchMetaDataQuery, useFetchAssetQuery } from '../../api/NasaApiSlice';
import { Header } from '../header/Header';
import { AssetMetadata } from './asset-metadata/AssetMetadata';

export const Asset: React.FC = () => {
  const { id } = useParams();
  const { data: metadata, isFetching: metadataLoading } = useFetchMetaDataQuery(id);
  const { data: imageData, isFetching: imageLoading } = useFetchAssetQuery(id);

  if (imageLoading || metadataLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (imageData && metadata) {
    const title = metadata['AVAIL:Title'];
    const description = metadata['AVAIL:Description'];
    const imageHrefOriginal = imageData.collection.items[0].href;

    return (
      <React.Fragment>
        <Header />
        <div style={{ width: '80vw', margin: 'auto', display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h2" style={{ fontSize: '3rem' }}>
            {title}
          </Typography>
          <Typography variant="body1" style={{ margin: 20 }}>
            {description}
          </Typography>
          {/* TODO: Center align image for when image isn't full width */}
          <img
            src={imageHrefOriginal}
            alt={title}
            style={{ margin: 20, border: 'solid 10px #333', borderRadius: 5 }}
          />
        </div>
        <AssetMetadata metadata={metadata} />
      </React.Fragment>
    );
  }
  return <div></div>;
};
