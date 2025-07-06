import { useCallback, useState } from "react"
import { usePlaceOrderMutation } from "../../api/api-slice.ts"
import { useAppSelector } from "../../app/hooks.ts"
import { selectBasket } from "../basket/basket-slice.ts"
import type { OrderPlaced } from "./order.ts"

export const OrderComponent = () => {
  const [order, setOrder] = useState<OrderPlaced>({
    city: "",
    first_name: "",
    last_name: "",
    zip_code: "",
    order: [],
  })
  const basket = useAppSelector(selectBasket);
  const [placeOrder, {isLoading, isSuccess, isError}] = usePlaceOrderMutation();

  const placeOrderHandler = useCallback(async () => {
    order.order = basket.map(item => {
      return {
        id: item.book.id,
        quantity: item.quantity,
      }
    })
    await placeOrder(order)
  }, [order, placeOrder, basket])

  return (
    <div>
      {isLoading && <p>Trwa składanie zamówienia...</p>}
      {isSuccess && <p>Zamówienie złożone!</p>}
      {isError && <p>Błąd składania zamówienia!</p>}
      <h1>Zamówienie</h1>
      <p>
        Imię:
        <input
          value={order.first_name}
          onChange={event => {
            setOrder(s => {
              return {
                ...s,
                first_name: event.target.value,
              }
            })
          }}
          type={"text"}
        />
      </p>
      <p>
        Nazwisko:
        <input
          value={order.last_name}
          onChange={event => {
            setOrder(s => {
              return {
                ...s,
                last_name: event.target.value,
              }
            })
          }}
          type={"text"}
        />
      </p>
      <p>
        Miejscowość:
        <input
          value={order.city}
          onChange={event => {
            setOrder(s => {
              return {
                ...s,
                city: event.target.value,
              }
            })
          }}
          type={"text"}
        />
      </p>
      <p>
        Kod pocztowy:
        <input
          value={order.zip_code}
          onChange={event => {
            setOrder(s => {
              return {
                ...s,
                zip_code: event.target.value,
              }
            })
          }}
          type={"text"}
        />
      </p>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <button onClick={placeOrderHandler}>Zamawiam i płacę!</button>
    </div>
  )
}
