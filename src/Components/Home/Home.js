import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleBuyNow = tShirt => {
        const exists = cart.find(ts => ts._id === tShirt._id);
        if (exists) {
            alert('You already added this product');
        }
        else {
            const newCart = [...cart, tShirt];
            setCart(newCart);
        }
    }

    const handleRemoveItem = (tShirt) => {
        const remaining = cart.filter(ts => ts._id !== tShirt._id);
        setCart(remaining);
    }

    return (
        <div className='home-container'>
            <div className='tShirts-container'>
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleBuyNow={handleBuyNow}
                    ></TShirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>

        </div>
    );
};

export default Home;