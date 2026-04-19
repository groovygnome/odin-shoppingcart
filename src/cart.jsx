import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router'
import Card from './card.jsx'

function Cart() {
  const { updateCart, getCart, products } = useOutletContext();
  let cart = getCart();

  return (
    <>
      <h1>Cart</h1>
      <ul className='cart-products'>
        {cart.map((quantity, index) => {
          if (quantity > 0) {
            let product = products[index];
            return (
              <Card
                title={product.title} description={product.description} img={product.image} updateCart={updateCart} productAmt={quantity} price={product.price} id={product.id}
                className={'product' + product.id} key={index} />
            )
          }
        })}
      </ul>
      <div className='checkout'>
        <button>CHECKOUT</button>
      </div>
    </>)
}

export default Cart;
