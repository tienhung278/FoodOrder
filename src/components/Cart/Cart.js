import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const ctx = useContext(CartContext);

    const onAddHandler = (item) => {
        ctx.onAddItemCart({...item, amount: 1});
    }

    const onRemoveHandler = (id) => {
        ctx.onRemoveItemCart(id);
    }

    const cartItems = <ul className={classes.cartItems}>{ctx.items.map(i => <CartItem key={i.id} name={i.name}
                                                                                      amount={i.amount}
                                                                                      price={i.price}
                                                                                      onAdd={onAddHandler.bind(null, i)}
                                                                                      onRemove={onRemoveHandler.bind(null, i.id)}
    />)}</ul>;

    return (<Modal onHideCart={props.onHideCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{ctx.totalAmount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.onHideCart}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>);
};

export default Cart;