import classes from "./HeaderCartButton.module.css"
import CartIcon from "../Cart/CartIcon";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const ctx = useContext(CartContext);
    const [isTotalItemsChanged, setIsTotalItemsChanged] = useState(false);
    const numberOfCartItems = ctx.items.reduce((prevVal, item) => prevVal + item.amount, 0);
    const buttonClasses = `${classes.button} ${isTotalItemsChanged && classes.bump}`;

    useEffect(() => {
        if (ctx.items.length > 0) {
            setIsTotalItemsChanged(true);
        }
        const timer = setTimeout(() => setIsTotalItemsChanged(false), 300);

        return () => clearTimeout(timer);
    }, [ctx.items]);

    return (<button className={buttonClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>);
};

export default HeaderCartButton;