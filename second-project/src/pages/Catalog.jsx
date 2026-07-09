import React from 'react'
import { aksiiProducts, sezonniyeProducts, podarkyProducts } from '../data/products'
import ProductCard from '../components/ProductCard'

const catalogCards = [
  ...aksiiProducts.slice(0, 3).map(item => ({ ...item, newPrice: item.newPrice })),
  ...sezonniyeProducts.slice(0, 3).map(item => ({ ...item, newPrice: item.newPrice })),
  ...aksiiProducts.slice(0, 3).map(item => ({ ...item, newPrice: item.newPrice })),
  ...sezonniyeProducts.slice(0, 3).map(item => ({ ...item, newPrice: item.newPrice }))
]

export default function Catalog() {
  return (
    <div className="catalog-page">
      <aside className="catalog-sidebar">
        <ul>
          <li className="category-title">
            <span>Букеты</span>
            <span>▲</span>
          </li>
          <li className="sub-item">Букеты из роз</li>
          <li className="sub-item">Букеты из хризантем</li>
          <li className="sub-item">Букеты из астр</li>
          <li className="sub-item">Букеты из орхидей</li>
          <li className="sub-item">Букеты из тюльпанов</li>
          <li className="sub-item">Букеты из фиалок</li>
          <li className="sub-item">Букеты из лилий</li>
          <li className="sub-item">Букеты из гвоздик</li>
          <li className="sub-item">Дизайнерские букеты</li>
          <li className="sub-item">Букет невесты</li>
          <li className="sub-item">Цветы в школу</li>
          <li className="sub-item">Цветы для учителя</li>
          <li className="sub-item">Цветы в вазе</li>
          <li className="sub-item">Тест букет</li>
          <li className="category-title">
            <span>Розы</span>
            <span>▼</span>
          </li>
          <li className="category-title">
            <span>Цветы в коробке</span>
            <span>▼</span>
          </li>
          <li className="category-title">
            <span>Композиции</span>
            <span>▼</span>
          </li>
          <li className="category-title">
            <span>Подарки</span>
            <span>▼</span>
          </li>
          <li className="category-title">
            <span>Подарочные корзины</span>
            <span>▼</span>
          </li>
          <li className="category-title">
            <span>Вкусные букеты</span>
            <span>▼</span>
          </li>
        </ul>
      </aside>

      <main className="catalog-main">
        <h1 className="catalog-title">Каталог Товаров</h1>
        <div className="catalog-filters">
          <select>
            <option>Цена: Макс</option>
          </select>
          <select>
            <option>Акт</option>
          </select>
          <select>
            <option>Розовый Букет</option>
          </select>
          <select>
            <option>Сортировка</option>
          </select>
          <select>
            <option>1 Популярности</option>
          </select>
        </div>

        <div className="catalog-grid">
          {catalogCards.map((item, index) => (
            <ProductCard key={`${item.id}-${index}`} item={item} showDiscount={Boolean(item.discount)} />
          ))}
        </div>

        <div className="catalog-load-more">
          <button className="btn-load-more">Ещё 18 товаров</button>
        </div>

        <div className="catalog-pagination">
          <button>{'<'}</button>
          {[1, 2, 3, 4, 5, 6, 7].map(page => (
            <button key={page} className={page === 1 ? 'active' : ''}>{page}</button>
          ))}
          <button>{'>'}</button>
        </div>

        <section className="catalog-seo">
          <p>
            На нашем сайте легко найти идеальный букет роз для любого события. Мы собрали самые свежие
            сорта, чтобы вы могли выбрать подарок с учётом вкуса и настроения.
          </p>
          <p>
            Красные, розовые и белые розы в стильных упаковках доступны с доставкой по городу.
            Букеты оформлены профессиональными флористами и готовы удивить ваших близких.
          </p>
          <p>
            Выбирайте розы от классики до дизайнерских композиций — каждый букет создаётся с заботой.
          </p>
          <h2>Когда уместно заказать букет роз?</h2>
          <p>
            Букет роз удобно дарить на день рождения, юбилей, свидание или деловую встречу.
            Эти цветы всегда выглядят достойно и помогают выразить чувства, даже когда слов не хватает.
          </p>
          <a href="#">Читать далее</a>
        </section>
      </main>
    </div>
  )
}
