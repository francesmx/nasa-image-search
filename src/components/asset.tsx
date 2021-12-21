import { Typography } from '@mui/material';
import { useParams } from 'react-router';
import useFetch from 'use-http';

export const Asset: React.FC = () => {
  const { id } = useParams();
  const imageURL = `https://images-api.nasa.gov/asset/${id}`;
  const metadataURL = `https://images-assets.nasa.gov/image/${id}/metadata.json`;

  const { data: imageData, loading: imageLoading } = useFetch(imageURL, []);
  const { data: metadata, loading: metadataLoading } = useFetch(metadataURL, []);

  if (imageLoading || metadataLoading) {
    return <Typography>Loading...</Typography>;
  }

  if (imageData && metadata) {
    const title = metadata['AVAIL:Title'];
    const description = metadata['AVAIL:Description'];
    const imageHrefOriginal = imageData.collection.items[0].href;

    return (
      <div>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        <img src={imageHrefOriginal} alt="Some text" />
      </div>
    );
  }

  return <div></div>;
};
