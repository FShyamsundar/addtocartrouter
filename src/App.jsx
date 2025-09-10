import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Cart from './components/Cart';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [product,setproduct]=useState([])
  const [cart, setCart] = useState([])

  useEffect(()=>{
  fetch("https://fakestoreapi.com/products",{
    method:"GET",
  })
  .then((res)=>res.json())
  .then((data)=>setproduct(data))
  .catch((err)=>console.log(err))
},[]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? {...item, quantity: item.quantity + 1} : item
        )
      }
      return [...prev, {...product, quantity: 1}]
    })
  }

  const updateQuantity = (id, quantity) => {
    if (quantity <= 0) {
      setCart(prev => prev.filter(item => item.id !== id))
    } else {
      setCart(prev => prev.map(item => 
        item.id === id ? {...item, quantity} : item
      ))
    }
  }

  

  return (
    <>
      <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}/>
      <Routes>
        <Route path="/" element={
          <>
            <Banner/>
            <div className="card-container">
              {product.map((course, idx) => (
                <ProductCard carddetails={course} key={idx} addToCart={addToCart} />
              ))}
            </div>
          </>
        } />
        <Route path="/cart" element={<Cart cart={cart} updateQuantity={updateQuantity} />} />
      </Routes>
    </>
  );
}

export default App



function ProductCard({ carddetails, addToCart }) {
  return (
    <div className="fs-card">
      <div className="fs-card-img-wrap">
        <img src={carddetails.image} alt="image" className="fs-card-img" />
      </div>

      <h3 className="fs-card-title">{carddetails.title}</h3>

      <div className="fs-card-row">
        <span className="fs-card-price">${carddetails.price}</span>
        <button className="fs-card-btn primary-btn" onClick={() => addToCart(carddetails)}>Add to Cart</button>
      </div>
    </div>
  );
}