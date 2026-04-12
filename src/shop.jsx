import { useOutletContext } from 'react-router'

function Shop() {
  const { products, updateCart } = useOutletContext();


  return (
    <>
      <h1>Shop</h1>
      <div className='products'>
        <ul>
          {products.map((product) => (
            <li key={product.id} className={product.id}>{product.title}</li>
          ))}
        </ul>
        <button onClick={() => updateCart(1, { quantity: 1 })}>Click Me :D</button>
      </div>
    </>
  )
}

export default Shop;
