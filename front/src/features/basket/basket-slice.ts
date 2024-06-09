import {BasketItem} from "./basket-item";
import {createAppSlice} from "../../app/createAppSlice";

export interface BasketSlice {
    basket: BasketItem[];
}

export const initialState: BasketSlice = {
    basket: []
}


export const createBasketSlice = createAppSlice({
    name: "basket",
    initialState,
    reducers: create => ({
        addToBasket: create.reducer<BasketItem>((state, action) => {
            state.basket.push(action.payload);
        }),
        removeFromBasket: create.reducer<string>((state, action) => {
            state.basket = state.basket.filter(basketItem => basketItem.id !== action.payload);
        })
    }),
    selectors: {
        selectBasket: state => state.basket,
        numberOfBooksInBasket: state => state.basket.reduce((acc, basketItem) => acc + basketItem.quantity, 0),
        totalPrice: state => state.basket.reduce((acc, basketItem) => acc + basketItem.quantity * basketItem.book.price, 0),
        numberOfItems: state => state.basket.length,
        basketItemPrice: (state, id: string) => {
            const basketItem = state.basket.find(basketItem => basketItem.id === id);
            return basketItem ? basketItem.quantity * basketItem.book.price : 0;
        }
    }
});

export const {
    addToBasket,
    removeFromBasket,
} = createBasketSlice.actions;

export const {
    selectBasket,
    numberOfItems,
    numberOfBooksInBasket,
    totalPrice,
    basketItemPrice
} = createBasketSlice.selectors;
