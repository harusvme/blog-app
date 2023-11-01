import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../types/PostTypes";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
    }),
    getPostById: builder.query<Post, number>({
      query: (postId) => `posts/${postId}`,
    }),
    getPostWithOffset: builder.query<Post[], number>({
      query: (offset) => `posts?_start=${offset}&_limit=10`,
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetPostWithOffsetQuery,
} = api;
