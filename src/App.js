import {Fragment, useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
    const [isShown, setIsShown] = useState(false);

    const showCartHandler = () => {
        setIsShown(true);
    };

    const hideCartHandler = () => {
        setIsShown(false);
    };

    return (<CartProvider>
        {isShown && <Cart onHideCart={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
        <main>
            <Meals/>
        </main>
    </CartProvider>);
}

export default App;
