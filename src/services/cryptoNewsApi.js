//redux boilerplate
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//header info. will be passed in the createRequest func.
const cryptoNewsHeaders = {
	'x-bingapis-sdk': 'true',
	'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
	'x-rapidapi-key': '2bcfba5e9fmshf01a1980a736480p19b8d4jsn9e4f0a41364f',
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({//creates the an obj
	reducerPath: 'cryptoNewsApi',
	baseQuery: fetchBaseQuery({ baseUrl }),//accepts the url
	endpoints: (builder) => ({
		getCryptoNews: builder.query({
			query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
		}),
	}),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
