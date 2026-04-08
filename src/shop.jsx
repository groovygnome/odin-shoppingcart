import { useOutletContext } from 'react-router'

function Shop() {
  const { products } = useOutletContext();


  return (
    <>
      <h1>Shop</h1>
      <div className='products'>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Shop;
