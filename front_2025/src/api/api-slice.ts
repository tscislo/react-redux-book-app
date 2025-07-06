// Need to use the React-specific entry point to import `createApi`
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export type Book = {
  id: number
  title: string
  author: string
  cover_url: string
  pages: number
  price: number
  currency: string
}

type BooksApiResponse = Book[];

type BookApiResponse = Book;

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  reducerPath: "api",
  tagTypes: ["book"],
  endpoints: build => ({
    getBooks: build.query<BooksApiResponse, void>({
      query: () => `book`,
      transformResponse: (response: {data: Book[]}) => response.data
    }),
    getBook: build.query<BookApiResponse, string>({
      query: id => `book/${id}`,
      transformResponse: (response: {data: Book}) => response.data
    }),
  }),
})

export const { useGetBooksQuery, useGetBookQuery } = apiSlice
