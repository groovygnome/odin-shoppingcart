import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router'
import cartIcon from './assets/cart.svg'

function Nav() {

  let [products, setProducts] = useState([]);
  let [cart, setCart] = useState([]);


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  function getProductAmt(id) {
    return cart[id];
  }

  function getCart() {
    return cart;
  }

  function updateCart(id, { quantity = -1 } = {}) {
    setCart(prevCart => {
      let newCart = [...prevCart];

      newCart[id - 1] = quantity;
      return newCart;
    });
  }

  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    if (cart[i] != undefined) total += cart[i];
  }

  return (
    <>
      <nav>
        <ul className='navlist'>
          <div className='navbar'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="shop">Shop</Link>
            </li>
          </div>
          <div className='cart'>
            <li>
              <Link to="cart"><img src={cartIcon}></img></Link>
              {total > 0 && <p>{total}</p>}
            </li>
          </div>
        </ul>
      </nav>
      <Outlet context={{ products, updateCart, getProductAmt, getCart }} />
    </>
  )
}

export default Nav;
