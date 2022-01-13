import { ImageExifData } from '../../../shared/types';

interface AssetMetadataProps {
  metadata: ImageExifData;
}

export const AssetMetadata: React.FC<AssetMetadataProps> = ({ metadata }) => {
  const sortedMetadataKeys = Object.keys(metadata).sort();

  return (
    metadata && (
      <table>
        <thead>
          <tr>
            <th style={{ textAlign: 'right', paddingRight: 10 }}>Metadata</th>
            <th style={{ textAlign: 'left' }}>Value</th>
          </tr>
        </thead>
        <tbody>
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
    )
  );
};
