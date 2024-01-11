import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TransactionData } from '../interfaces/TransactionData';
import { TransactionPayload } from '../interfaces/TransactionPayload';

export const transactionsApi = createApi({
  reducerPath: 'transactionsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://apilist.tronscanapi.com/api/',
  }),
  endpoints: (builder) => ({
    getTransaction: builder.query<TransactionData, TransactionPayload>({
      query: (args) =>
        `transaction?sort=-timestamp&limit=${args.limit}&start=${args.start}`,
    }),
  }),
});

export const { useGetTransactionQuery } = transactionsApi;
