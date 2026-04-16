import { useOutletContext } from 'react-router'
import Card from './card.jsx';

function Shop() {
  const { products, updateCart, getProductAmt } = useOutletContext();


  return (
    <>
      <h1>Shop</h1>
      <div className='products'>
        <ul>
          {products.map((product) => (
            <li className='product' key={product.id}><Card
              title={product.title} description={product.description} img={product.image} isProduct={true} updateCart={updateCart} getProductAmt={getProductAmt} price={product.price} id={product.id}
              className={'product' + product.id} /></li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Shop;

//function Card(title, description, img = '', isProduct = false, updateShoppingCart, price, id) {

