import add from './assets/add.svg'
import addToCart from './assets/addtocart.svg'
import remove from './assets/remove.svg'
import trash from './assets/delete.svg'
import { useState } from 'react'

function Card({ title, description, img = '', isProduct = false, updateCart = null, getProductAmt = null, productAmt = -1, price = 0, id = 0 }) {

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
      <div className='Cartcard'>
        <img src={img} />
        <h3>{title}</h3>
        <p>{'$' + (price * productAmt).toFixed(2)}</p>
      </div>
    )
  }

}

function CartButton({ id, updateCart, getProductAmt }) {
  let productAmt = getProductAmt(id - 1);
  let [newAmt, setNewAmt] = useState(productAmt);
  if (productAmt === 0 || !productAmt) {
    return (
      <div className='cartButton'>
        <button className='addtocartButton' onClick={() => { updateCart(id, { quantity: 1 }); setNewAmt(1) }}><img src={addToCart} alt='Add to Cart' /></button>
      </div>
    )
  } else {
    return (
      <div className='cartButton'>
        <div className='cbUpper'>
          <button onClick={() => setNewAmt((prevamt) => prevamt > 0 ? prevamt - 1 : prevamt)}><img src={newAmt <= 1 ? trash : remove} alt='Remove from Cart' /></button>
          <input type='number' min='0' onChange={(e) => setNewAmt(Number(e.target.value))} placeholder={productAmt} value={newAmt} />
          <button onClick={() => setNewAmt((prevamt) => prevamt + 1)}><img src={add} alt='One More' /></button>
        </div>
        <div className='cbLower'>
          <button onClick={() => updateCart(id, { quantity: newAmt })}>UPDATE CART</button>
        </div>
      </div>
    )
  }
}

export default Card;
