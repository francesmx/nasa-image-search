import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/header/header';
import { useFetchAssetQuery, useFetchMetaDataQuery } from '../../api/NasaApiSlice';
import { Asset } from '../../components/asset/asset';
import { LoadingMessage } from '../../components/loading-message/loading-message';

export const AssetPage: React.FC = () => {
  // Both the Asset and MetadataTable components require metadata,
  // so the data fetching happens in the parent here
  const { id } = useParams<{ id: string }>();

  const { data: metadata, isFetching: metadataLoading } = useFetchMetaDataQuery(id);
  const { data: imageData, isFetching: imageLoading } = useFetchAssetQuery(id);

  if (imageLoading || metadataLoading) {
    return (
      <React.Fragment>
        <Header />
        <LoadingMessage />
      </React.Fragment>
    );
  }

  if (imageData && metadata) {
    const title = metadata['XMP:Title'];
    const description = metadata['XMP:Description'];
    const imageUrl = imageData.collection.items[0].href;

    return (
      <React.Fragment>
        <Header />
        <Asset title={title} description={description} imageUrl={imageUrl} />
        {/* TODO: Show metadata on demand, and style nicely */}
        {/* <MetadataTable metadata={metadata} /> */}
      </React.Fragment>
    );
  }
  return <div>Nothing was found</div>;
};
