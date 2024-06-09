import {selectBasket} from "../basket/basket-slice";
import {useAppSelector} from "../../app/hooks";
import {useState} from "react";
import {Order} from "./order";

export const OrderComponent = () => {
    const [order, setOrder] = useState<Order>({});
    const basket = useAppSelector(selectBasket);

    const placeOrder = () => {
        fetch('http://localhost:3001/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                order: basket.map(item => {
                    return {
                        id: item.book.id,
                        quantity: item.quantity
                    }
                }),
                first_name: order.first_name,
                last_name: order.last_name,
                city: order.city,
                zip_code: order.zip_code
            })
        }).then(response => {
            if(response.ok) {
                alert('Zamówienie złożone!');
            } else {
                alert('Błąd złożenia zamówienia');
            }
        })
    }

    return (
        <div>
            <h1>Zamówienie</h1>
            <p>Imię: <input value={order.first_name} onChange={(event) => setOrder((s) => {
                return {
                    ...s,
                    first_name: event.target.value
                }
            })} type={'text'}/></p>
            <p>Nazwisko: <input
                value={order.last_name} onChange={(event) => setOrder((s) => {
                return {
                    ...s,
                    last_name: event.target.value
                }
            })}
                type={'text'}/></p>
            <p>Miejscowość: <input
                value={order.city} onChange={(event) => setOrder((s) => {
                return {
                    ...s,
                    city: event.target.value
                }
            })}
                type={'text'}/></p>
            <p>Kod pocztowy: <input
                value={order.zip_code} onChange={(event) => setOrder((s) => {
                return {
                    ...s,
                    zip_code: event.target.value
                }
            })}
                type={'text'}/></p>
            <button onClick={placeOrder}>Zamawiam i płacę!</button>
        </div>
    );
};
