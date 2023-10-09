import {createContext} from "react";

const CartContext = createContext({
    items: [],
    totalAmount: 0,
    onAddItemCart: item => {},
    onRemoveItemCart: id => {}
});

export default CartContext;