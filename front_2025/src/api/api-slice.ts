// Need to use the React-specific entry point to import `createApi`
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { Order, OrderPlaced } from "../features/order/order.ts"

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
type PlaceOrderApiResponse = Order;

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
    placeOrder: build.mutation<PlaceOrderApiResponse, OrderPlaced>({
      query: order => ({
        url: `order`,
        method: 'POST',
        body: order,
      }),
      transformResponse: (response: {data: Order}) => response.data
    })
  }),
})

export const { useGetBooksQuery, useGetBookQuery, usePlaceOrderMutation } = apiSlice
