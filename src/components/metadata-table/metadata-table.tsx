import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { ImageExifData } from '../../shared/types';

interface MetadataTableProps {
  metadata: ImageExifData;
}

export const MetadataTable: React.FC<MetadataTableProps> = ({ metadata }) => {
  const sortedMetadataKeys = Object.keys(metadata).sort();

  return (
    metadata && (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 320 }} aria-label={`Metadata for ${metadata['XMP:Title']}`}>
          <TableHead>
            <TableRow>
              <TableCell align="left">Metadata</TableCell>
              <TableCell align="left">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedMetadataKeys.map((metaKey) => {
              return (
                <TableRow key={metaKey}>
                  <TableCell align="left">{metaKey}</TableCell>
                  <TableCell align="left">
                    {metadata[metaKey as keyof ImageExifData] || '-'}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
};
