import {useEffect} from 'react';
import {useSelector} from "react-redux";
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {cart_db} from "./api_keys";


function App() {
    const showCart = useSelector(state => state.ui.cartIsVisible);
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        fetch(cart_db, {method: "PUT", body: JSON.stringify(cart)});
    }, [cart]);

    return (
        <Layout>
            {showCart && <Cart/>}
            <Products/>
        </Layout>
    );
}

export default App;
