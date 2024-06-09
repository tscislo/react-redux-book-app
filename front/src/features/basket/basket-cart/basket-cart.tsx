import {useAppSelector} from "../../../app/hooks";
import {numberOfItems, totalPrice} from "../basket-slice";
import classes from './basket.module.css';

export const BasketCartComponent = () => {
    const items = useAppSelector(numberOfItems);
    const total = useAppSelector(totalPrice);

    return (
        <div className={classes.basketCart}>
            <p>{items}</p>
            <p>{total} PLN</p>
            <p></p>
        </div>
    )
}
