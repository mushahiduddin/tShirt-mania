import React from 'react';
import './TShirt.css'

const TShirt = ({tShirt,handleBuyNow}) => {
    const {name,picture,price} = tShirt;
    return (
        <div className='tshirt-details'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <button onClick={()=> handleBuyNow(tShirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;