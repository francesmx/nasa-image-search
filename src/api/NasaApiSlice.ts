import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AssetResponse, ImageExifData, NasaApiResponse } from '../shared/types';

export const NASA_BASE_URL = 'https://images-api.nasa.gov';

// RTK Query syntax - creates custom hooks for data fetching within components
export const nasaApiSlice = createApi({
  reducerPath: 'nasaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: NASA_BASE_URL,
  }),
  endpoints(builder) {
    return {
      fetchNasaAssets: builder.query<NasaApiResponse | void, string | undefined>({
        query(searchTerms) {
          return `/search?&media_type=image&q=${searchTerms}`;
        },
      }),
      fetchMetaData: builder.query<ImageExifData | void, string | undefined>({
        query: (id) => {
          return `https://images-assets.nasa.gov/image/${id}/metadata.json`;
        },
      }),
      fetchAsset: builder.query<AssetResponse | void, string | undefined>({
        query(id) {
          return `/asset/${id}`;
        },
      }),
    };
  },
});

export const { useFetchNasaAssetsQuery, useFetchMetaDataQuery, useFetchAssetQuery } = nasaApiSlice;
