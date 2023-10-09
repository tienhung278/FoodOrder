import CartContext from "./cart-context";
import {useReducer} from "react";

const defaultCartState = {
    items: [], totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {
        let existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
        let existingItem = state.items[existingItemIndex];
        let updatedItems = [];

        if (existingItem) {
            const updatedItem = {...existingItem, amount: existingItem.amount + action.item.amount};
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        } else {
            updatedItems = [...state.items, action.item];
        }

        const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    } else if (action.type === "REMOVE_ITEM") {
        let existingItemIndex = state.items.findIndex(item => item.id === action.id);
        let existingItem = state.items[existingItemIndex];
        let updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems = [];
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(i => i.id !== action.id);
        } else {
            existingItem.amount -= 1;
            updatedItems = [...state.items];
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, dispatchItems] = useReducer(cartReducer, defaultCartState);

    const onAddItemCartHandler = item => {
        dispatchItems({
            type: "ADD_ITEM", item: item
        });
    };

    const onRemoveItemCartHandler = id => {
        dispatchItems({
            type: "REMOVE_ITEM", id: id
        });
    };

    return (<CartContext.Provider value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        onAddItemCart: onAddItemCartHandler,
        onRemoveItemCart: onRemoveItemCartHandler
    }}>{props.children}</CartContext.Provider>);
};

export default CartProvider;