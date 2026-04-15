import add from './assets/add.svg'
import addToCart from './assets/addtocart.svg'
import remove from './assets/remove.svg'
import trash from './assets/delete.svg'

function Card({ title, description, img = '', isProduct = false, updateCart = null, getProductAmt = null, price = 0, id = 0 }) {

  if (isProduct) {
    return (
      <div className='shoppingCard'>`
        <img src={img} />
        <h3>{title}</h3>
        <p>{description}</p>
        <CartButton id={id} updateCart={updateCart} getProductAmt={getProductAmt} />
        <p>{'$' + price.toFixed(2)}</p>
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
  if (productAmt === 0 || !productAmt) {
    return (<button onClick={() => updateCart(id, { increment: true })}><img src={addToCart} alt='Add to Cart' /></button>)
  } else if (productAmt > 1) {
    return (
      <>
        <button onClick={() => updateCart(id, { decrement: true })}><img src={remove} alt='Remove from Cart' /></button>
        <p>{productAmt}</p>
        <button onClick={() => updateCart(id, { increment: true })}><img src={add} alt='One More' /></button>
      </>
    )
  } else {
    return (
      <>
        <button onClick={() => updateCart(id, { decrement: true })}><img src={trash} alt='One Less' /></button>
        <p>{productAmt}</p>
        <button onClick={() => updateCart(id, { increment: true })}><img src={add} alt='One More' /></button>
      </>
    )
  }
}

export default Card;
