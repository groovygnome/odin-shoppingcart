import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router'
import Card from './card.jsx'

function Cart() {
  const { updateCart, getCart, products, getProductAmt } = useOutletContext();
  let cart = getCart();

  let total = 0;

  return (
    <>
      <h1>Cart</h1>
      <div className='cart-page'>
        <ul className='cart-products'>
          {cart.map((quantity, index) => {
            if (quantity > 0) {
              let product = products[index];
              total += (quantity * product.price);
              return (
                <Card
                  title={product.title} description={product.description} img={product.image} updateCart={updateCart} productAmt={quantity} price={product.price} id={product.id}
                  className={'product' + product.id} key={index} getProductAmt={getProductAmt} />
              )
            }
          })}
        </ul>
        <div className='checkout'>
          <div>
            <p>Subtotal: ${total.toFixed(2)}</p>
            <p>Shipping: ${total > 100 ? 0.00 : 5.99}</p>
            <p>Tax: ${(total * 0.08).toFixed(2)}</p>
            <p>Total: ${(total + (total > 100 ? 0.00 : 5.99) + (total * 0.08)).toFixed(2)}</p>
          </div>
          <button className='checkout-button'>CHECKOUT</button>
        </div>
      </div>
    </>)
}

export default Cart;
