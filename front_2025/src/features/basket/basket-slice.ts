import type { BasketItem } from "./basket-item"
import { createAppSlice } from "../../app/createAppSlice"

export type BasketSlice = {
  products: BasketItem[]
}

export const initialState: BasketSlice = {
  products: [],
}

export const basketSlice = createAppSlice({
  name: "basket",
  initialState,
  reducers: create => ({
    addToBasket: create.reducer<BasketItem>((state, action) => {
      const productAlreadyInBasket = state.products.find(
        product => product.book.id === action.payload.book.id,
      )
      if (productAlreadyInBasket) {
        productAlreadyInBasket.quantity += action.payload.quantity
      } else {
        state.products.push(action.payload)
      }
    }),
    removeFromBasket: create.reducer<string>((state, action) => {
      state.products = state.products.filter(
        basketItem => basketItem.id !== action.payload,
      )
    }),
    clearBasket: create.reducer((state) => {
      state.products = [];
    }),
  }),
  selectors: {
    selectBasket: state => state.products,
    numberOfBooksInBasket: state =>
      state.products.reduce((acc, basketItem) => acc + basketItem.quantity, 0),
    totalPrice: state =>
      state.products.reduce(
        (acc, basketItem) => acc + basketItem.quantity * basketItem.book.price,
        0,
      ),
    numberOfItems: state => state.products.length,
    basketItemPrice: (state, id: string) => {
      const basketItem = state.products.find(basketItem => basketItem.id === id)
      return basketItem ? basketItem.quantity * basketItem.book.price : 0
    },
  },
})

export const { addToBasket, removeFromBasket, clearBasket } = basketSlice.actions

export const {
  selectBasket,
  numberOfItems,
  numberOfBooksInBasket,
  totalPrice,
  basketItemPrice,
} = basketSlice.selectors
