import React from 'react';
import { useParams } from 'react-router';
import { Header } from '../components/header/Header';
import { useFetchAssetQuery, useFetchMetaDataQuery } from '../api/nasaApiSlice';
import { MetadataTable } from '../components/metadata-table/MetadataTable';
import { Asset } from '../components/asset/Asset';
import { LoadingMessage } from '../components/loading-message/LoadingMessage';

export const AssetPage: React.FC = () => {
  // both assets require metadata, so the data fetching happens in the parent here
  const { id } = useParams();
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
        {/* Figure out nicer way to show metadata on demand */}
        {/* <MetadataTable metadata={metadata} /> */}
      </React.Fragment>
    );
  }
  return <div>Nothing was found</div>;
};
