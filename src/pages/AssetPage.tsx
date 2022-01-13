import React from 'react';
import { useParams } from 'react-router';
import { Typography } from '@mui/material';
import { ImageExifData } from '../shared/types';
import { Header } from '../components/header/Header';
import { useFetchAssetQuery, useFetchMetaDataQuery } from '../api/NasaApiSlice';

export const AssetPage: React.FC = () => {
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
    const sortedMetadataKeys = Object.keys(metadata).sort();

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
          {/* TODO: Use MUI table for easier styling */}
          {metadata && (
            <table>
              <thead>
                <tr>
                  <th style={{ textAlign: 'right', paddingRight: 10 }}>Metadata</th>
                  <th style={{ textAlign: 'left' }}>Value</th>
                </tr>
              </thead>
              <tbody>
                {/* TODO: Don't include metadata where the value is missing */}
                {sortedMetadataKeys.map((metaKey) => {
                  return (
                    <tr key={metaKey}>
                      <td style={{ textAlign: 'right', paddingRight: 10 }}>{metaKey}</td>
                      <td style={{ textAlign: 'left' }}>
                        {metadata[metaKey as keyof ImageExifData] || '-'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </React.Fragment>
    );
  }
  return <div></div>;
};
