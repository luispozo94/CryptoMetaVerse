//created an API that will fetch data. The data needs to be passed/exported to the store
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
	'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
	'x-rapidapi-key': '2bcfba5e9fmshf01a1980a736480p19b8d4jsn9e4f0a41364f'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
		getExchanges: builder.query({
			query: (count) => createRequest(`/exchanges`),
		}),
		getCryptoDetails: builder.query({
			query: (coinId) => createRequest(`/coin/${coinId}`),
		}),
		getCryptoHistory: builder.query({
			query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history/${timePeriod}`),
		}),
	}),
});
//the endpoint getCryptos needs the 'use' in the front and 'Query' in the end ==> redux boilerplate
export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery } = cryptoApi;
