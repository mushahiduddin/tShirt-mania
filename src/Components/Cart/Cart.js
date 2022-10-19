import React from 'react';

const Cart = ({ cart, handleRemoveItem }) => {
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Order Quantity: {cart.length}</p>
            {
                cart.map(tShirt => <p
                    key={tShirt._id}
                >
                    {tShirt.name}
                    <button onClick={()=>handleRemoveItem(tShirt)}>X</button>
                </p>)
            }

        </div>
    );
};

export default Cart;