import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AssetResponse, ImageExifData, NasaApiResponse } from '../shared/types';

export const nasaApiSlice = createApi({
  reducerPath: 'nasaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://images-api.nasa.gov',
  }),
  endpoints(builder) {
    return {
      fetchNasaAssets: builder.query<NasaApiResponse | void, string | void>({
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