import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
  const {id, productName, price, productImage} = props.data;
  const {addToCart, cartItems} =useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className='product'>
      <img src={productImage} alt="" />
      <div className="description">

      <p><b>{productName}</b></p>

      <p><b>&#8358; {price}</b></p>
      </div>
      <button className="addToCart" onClick={()=> addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  )
}
