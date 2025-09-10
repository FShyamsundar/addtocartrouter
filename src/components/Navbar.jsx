import React from "react";
import { useNavigate } from "react-router-dom";
export default function Navbar({ cartCount = 0 }) {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h3 className="nav-content">FakeStore</h3>
      <button className="btn primary-btn" onClick={() => navigate('/cart')}>Cart ({cartCount})</button>
    </div>
  );
}
