import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router'
import cartIcon from './assets/cart.svg'

function Nav() {

  let [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="shop">Shop</Link>
          </li>
          <li>
            <Link to="cart"><img src={cartIcon}></img></Link>
          </li>
        </ul>
      </nav>
      <Outlet context={{ products }} />
    </>
  )
}

export default Nav;
