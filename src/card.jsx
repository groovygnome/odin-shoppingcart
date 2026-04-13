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
  if (getProductAmt(id) === 0 || !getProductAmt(id)) {
    return (<button onClick={() => updateCart(id, { increment: true })}>Add To Cart</button>)
  } else {
    return (
      <>
        <button onClick={() => updateCart(id, { decrement: true })}>-</button>
        <button onClick={() => updateCart(id, { increment: true })}>+</button>
      </>
    )
  }
}

export default Card;
