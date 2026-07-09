import React from 'react'

export default function ProductCard({ item, showDiscount }) {
  const stars = Array.from({ length: item.stars || 0 }, () => '★').join('')

  return (
    <div className="product-card">
      <div className="product-img-wrapper">
        <img src={item.src} alt={item.name} className="product-img" />

        {showDiscount && item.discount && (
          <div className="discount-badge">{item.discount}</div>
        )}

        {item.isTop && <div className="top-badge">TOP</div>}
        <div className="heart-icon">♡</div>
      </div>

      <div className="card-stars">{stars}</div>
      <div className="card-name">{item.name}</div>
      <div className="card-price-row">
        {showDiscount && item.oldPrice && (
          <span className="card-price-old">{item.oldPrice} грн</span>
        )}
        <span className="card-price-new">{item.newPrice} грн</span>
      </div>
      <button className="btn-order">Заказать</button>
      <a href="#" className="btn-quick">Быстрый заказ</a>
    </div>
  )
}
