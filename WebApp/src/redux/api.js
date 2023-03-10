import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'app',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('access_token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
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
        }),
        login: builder.mutation({
            query: (credentials) => {
                const form = new FormData();
                form.append('username', credentials.username);
                form.append('password', credentials.password);
                return {
                    url: 'token',
                    method: 'POST',
                    body: form
                }
            },
        })
    })
});

export const { useRateImageMutation, useLoginMutation } = api;