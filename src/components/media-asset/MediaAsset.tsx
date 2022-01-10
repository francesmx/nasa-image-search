import React from 'react';
import { useParams } from 'react-router';
import { Typography } from '@mui/material';
import { useFetchMetaDataQuery, useFetchAssetQuery } from '../../api/NasaApiSlice';
import { Header } from '../header/Header';

export const MediaAsset: React.FC = () => {
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
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        <img src={imageHrefOriginal} alt="Some text" />
      </React.Fragment>
    );
  }

  return <div></div>;
};
