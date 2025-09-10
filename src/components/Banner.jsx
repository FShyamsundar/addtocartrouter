import React from "react";
export default function Banner() {
  return (
    <div className="banner-section">
      <div className="banner">
        <div className="banner-content">
          <h2>Welcome to FakeStore</h2>
          <p>
            Discover amazing products at unbeatable prices. Shop with confidence
            and enjoy fast, secure delivery to your doorstep.
          </p>
          <div className="cta-buttons">
            <button className="cta-btn primary-btn">Start Shopping </button>
            <button className="cta-btn secondary-btn">Browse Categories</button>
          </div>
        </div>
      </div>
    </div>
  );
}