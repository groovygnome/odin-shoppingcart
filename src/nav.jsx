import { useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router'
import cartIcon from './assets/cart.svg'

function Nav() {

  let [products, setProducts] = useState([]);
  let [cart, setCart] = useState({});


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  function updateCart(id, { quantity = -1, increment = false, decrement = false } = {}) {
    setCart(prevCart => {
      let oldAmt;
      prevCart[id] ? oldAmt = prevCart[id] : oldAmt = 0;
      let newCart = { ...prevCart };

      if (quantity != -1) {
        if (quantity > 0) newCart[id] = quantity;
        else delete newCart[id];
        return newCart;
      }

      if (increment) {
        newCart[id] = oldAmt + 1;
        return newCart;
      }

      if (decrement) {
        if (oldAmt - 1 != 0) newCart[id] = oldAmt - 1;
        else delete newCart[id];
        return newCart;
      }


      return newCart;
    });
  }

  let total = 0;

  for (let id in cart) {
    total += cart[id];
  }

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
            <p>{total}</p>
          </li>
        </ul>
      </nav>
      <Outlet context={{ products, updateCart }} />
    </>
  )
}

export default Nav;
