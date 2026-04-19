import add from './assets/add.svg'
import addToCart from './assets/addtocart.svg'
import remove from './assets/remove.svg'
import trash from './assets/delete.svg'
import { useState } from 'react'

function Card({ title, description, img = '', isProduct = false, updateCart = null, getProductAmt = null, price = 0, id = 0 }) {

  if (isProduct) {
    return (
      <div className='shoppingCard'>
        <img src={img} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{'$' + price.toFixed(2)}</p>
        <CartButton id={id} updateCart={updateCart} getProductAmt={getProductAmt} />
      </div>
    )
  } else {
    return (
      <div className='card'>
      </div>
    )
  }

}

function CartButton({ id, updateCart, getProductAmt }) {
  let productAmt = getProductAmt(id);
  let [newAmt, setNewAmt] = useState();
  if (productAmt === 0 || !productAmt) {
    return (
      <div className='cartButton'>
        <button className='addtocartButton' onClick={() => updateCart(id, { increment: true })}><img src={addToCart} alt='Add to Cart' /></button>
      </div>
    )
  } else {
    return (
      <div className='cartButton'>
        <div className='cbUpper'>
          <button onClick={() => updateCart(id, { decrement: true })}><img src={productAmt === 1 ? trash : remove} alt='Remove from Cart' /></button>
          <input type='number' min='0' onChange={(e) => setNewAmt(Number(e.target.value))} placeholder={productAmt} />
          <button onClick={() => updateCart(id, { increment: true })}><img src={add} alt='One More' /></button>
        </div>
        <div className='cbLower'>
          <button onClick={() => updateCart(id, { quantity: newAmt })}>UPDATE CART</button>
        </div>
      </div>
    )
  }
}

export default Card;
