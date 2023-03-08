import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'app',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/' }),
    endpoints: (builder) => ({
        rateImage: builder.mutation({
            query: (image) => {
                const form = new FormData();
                form.append('file', image);
                return {
                    url: 'rate-image',
                    method: 'POST',
                    body: form
                }
            },
        })
    })
});

export const { useRateImageMutation } = api;