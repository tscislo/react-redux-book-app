// import {describe, expect} from "vitest";
// import {renderWithProviders} from "../../../utils/test-utils";
// import {BasketComponent} from "./basket.component";
// import {screen} from "@testing-library/react";
// import {MemoryRouter} from "react-router";
//
// describe('BasketComponent', () => {
//     it('should create', async () => {
//         // Arrange
//         renderWithProviders(<BasketComponent/>);
//         // Assert
//         expect(await screen.findByTestId('basket-header')).toBeDefined();
//     });
//     it('should display empty basket message', async () => {
//         // Arrange
//         renderWithProviders(<BasketComponent/>);
//         // Assert
//         expect(await screen.findByText('Koszyk jest pusty!')).toBeDefined();
//     });
//
//     it('should display basket items', async () => {
//         // Arrange
//         renderWithProviders(
//             <MemoryRouter>
//                 <BasketComponent/>
//             </MemoryRouter>, {
//                 preloadedState: {
//                     book: {
//                         book: null,
//                         status: 'idle',
//                     },
//                     books: {
//                         books: [],
//                         status: 'idle',
//                     },
//                     basket: {
//                         basket: [
//                             {
//                                 id: '1',
//                                 book: {
//                                     id: 1,
//                                     title: 'title',
//                                     "author": 'a',
//                                     "cover_url": 'b',
//                                     "pages": 111,
//                                     "price": 111,
//                                     "currency": 'e'
//                                 },
//                                 quantity: 5,
//                             },
//                             {
//                                 id: '12',
//                                 book: {
//                                     id: 12,
//                                     title: 'title',
//                                     "author": 'a',
//                                     "cover_url": 'b',
//                                     "pages": 111,
//                                     "price": 111,
//                                     "currency": 'e'
//                                 },
//                                 quantity: 5,
//                             }
//                         ]
//                     }
//                 }
//             });
//
//         // Assert
//         expect(await screen.findByText('Wszystkich książek w koszyku: 10')).toBeDefined();
//     });
//
//
// });
