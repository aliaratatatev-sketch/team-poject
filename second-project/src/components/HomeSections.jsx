import ProductCard from './ProductCard'

const urlGlavniy = 'https://images.unsplash.com/photo-1657889811840-be95f8d5b3fb?q=80&w=1172&auto=format&fit=crop'

const spiskoBannery = [
  { id: 1, text: 'Розы', src: 'https://images.unsplash.com/photo-1626436655708-b55f1fc2f12a?q=80&w=2070&auto=format&fit=crop', isYellow: false },
  { id: 2, text: 'Подарки', src: 'https://images.unsplash.com/photo-1669459598851-db301316bab7?q=80&w=2074&auto=format&fit=crop', isYellow: false },
  { id: 3, text: 'Подарочные корзины', src: 'https://images.unsplash.com/photo-1669459681510-e6917a16c583?q=80&w=1167&auto=format&fit=crop', isYellow: true },
  { id: 4, text: 'Цветы в коробке', src: 'https://images.unsplash.com/photo-1669459598776-0a202078f96f?q=80&w=1174&auto=format&fit=crop', isYellow: false }
]

export function Banner() {
  return (
    <div className="banner-section">
      <div className="big-banner">
        <img src={urlGlavniy} alt="Главный баннер" className="big-banner-img" />
        <div className="big-banner-text">
          <h2>
            Скидки <span className="skidka-red">-6%</span> на все букеты
            <br />
            <span className="predzakaz-pink">по предзаказу</span> на 8 марта
          </h2>
        </div>
      </div>

      <div className="mini-banners-grid">
        {spiskoBannery.map(item => (
          <div key={item.id} className={`small-card ${item.isYellow ? 'yellow-bg' : ''}`}>
            <img src={item.src} alt={item.text} className="small-card-img" />
            <span className="card-tag">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function InfoBlocks() {
  return (
    <div className="preimushestva">
      <div className="block-card svetliy-fon">
        <div className="card-info-text">
          <h3>Фото доставок наших букетов</h3>
          <p>Безупречное качество обслуживания и доставка в любую точку города</p>
        </div>
        <div className="big-emoji">🖼️</div>
      </div>

      <div className="block-card temniy-fon">
        <div className="emoji-top">🎥</div>
        <h3>Видео отчеты клиентов</h3>
        <p>Наши счастливые клиенты с букетами от Flowers-Ukraine</p>
      </div>

      <div className="block-card svetliy-fon">
        <div className="card-info-text">
          <h3>Подарок каждому клиенту</h3>
          <p>К каждому заказу мы прилагаем комплимент от компании в виде маленького презента</p>
        </div>
        <div className="big-emoji">🎁</div>
      </div>
    </div>
  )
}

export function ProductSection({ title, products, showDiscount = false, showOldPrice = false }) {
  return (
    <section className="products-section">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <div className="section-arrows">
          <button className="arrow-btn">‹</button>
          <button className="arrow-btn">›</button>
        </div>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            item={product}
            showDiscount={showDiscount}
            showOldPrice={showOldPrice}
          />
        ))}
      </div>
    </section>
  )
}

export function ForumSection() {
  const forumPosts = [
    {
      id: 1,
      title: 'Какие цветы под запретом: что нельзя дарить',
      desc: 'Осведомлённость в сфере новых трендов цветочного дизайна и знакомства с работами...',
      img: 'https://images.unsplash.com/photo-1604887556781-71ce15dcd7a3?q=80&w=500&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Как сохранить букет свежим: советы и рекомендации',
      desc: 'Осведомлённость в сфере новых трендов цветочного дизайна и знакомства с работами...',
      img: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=500&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Цветочный этикет – как правильно дарить цветы',
      desc: 'Осведомлённость в сфере новых трендов цветочного дизайна и знакомства с работами...',
      img: 'https://images.unsplash.com/photo-1570129477492-45ba003df501?q=80&w=500&auto=format&fit=crop'
    }
  ]

  return (
    <section className="forum-section">
      <div className="forum-header">
        <h2>Форум</h2>
        <a href="#" className="all-news-link">Все новости →</a>
      </div>

      <div className="forum-grid">
        {forumPosts.map(post => (
          <div key={post.id} className="forum-card">
            <div className="forum-img">
              <img src={post.img} alt={post.title} />
            </div>
            <div className="forum-content">
              <h3>{post.title}</h3>
              <p>{post.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ContactsSection() {
  return (
    <section className="contacts-section">
      <div className="contacts-grid">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.4479819887237!2d30.5196!3d50.4498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf37a63e79c1%3A0x6de6a4c0b6e7e1b0!2z0J7RgdGC0YDQsNCy0LDQtwwg0KLQvtC80YvQvNCw0YAg0J_RgNC40L7RgtCwLCDQmtC-0LvQvdC10YLQviAsIDA0ODEwIg!5e0!3m2!1suk!2sua!4v1687534000000"
            width="100%"
            height="400"
            style={{ border: 'none', borderRadius: '8px' }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>

        <div className="contacts-info">
          <div className="contacts-logo-box">
            <div className="contacts-emoji">🌸</div>
            <div>
              <h3>FLOWERS-UKRAINE</h3>
              <p>доставка цветов и подарков</p>
            </div>
          </div>

          <div className="contacts-details">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <p className="contact-label">Телефон:</p>
                <a href="tel:+380638293030">+38 (063) 829 30 30</a>
                <a href="tel:+380678293030">+38 (067) 829 30 30</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">💬</span>
              <div>
                <p className="contact-label">Skype:</p>
                <a href="#">Flowers-Ukraine</a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <div>
                <p className="contact-label">Почта:</p>
                <a href="mailto:flowers.ukraine2014@gmail.com">flowers.ukraine2014@gmail.com</a>
              </div>
            </div>

            <div className="social-icons-contacts">
              <a href="#">📷</a>
              <a href="#">📷</a>
              <a href="#">📘</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col footer-branding">
          <div className="footer-logo">
            <span className="footer-emoji">🌸</span>
            <div>
              <h4>FLOWERS-UKRAINE</h4>
              <p>доставка цветов и подарков</p>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h5>ИНФОРМАЦИЯ</h5>
          <ul>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Доставка и оплата</a></li>
            <li><a href="#">Политика конфиденциальности</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>СЛУЖБА ПОДДЕРЖКИ</h5>
          <ul>
            <li><a href="#">Карта сайта</a></li>
            <li><a href="#">Возврат товара</a></li>
            <li><a href="#">Связаться с нами</a></li>
            <li><a href="#">Для сотрудничества</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>ЛИЧНЫЙ КАБИНЕТ</h5>
          <ul>
            <li><a href="#">Личный кабинет</a></li>
            <li><a href="#">История заказа</a></li>
            <li><a href="#">Закладки</a></li>
            <li><a href="#">Список новостей</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>ДОПОЛНИТЕЛЬНО</h5>
          <ul>
            <li><a href="#">Подарочные</a></li>
            <li><a href="#">Сертификаты</a></li>
            <li><a href="#">Акции</a></li>
            <li><a href="#">Цветы в офис</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2021. Все права защищены.</p>
        <div className="payment-methods">
          <span>Способы оплаты:</span>
          <span>💳 LiqPay</span>
          <span>💳 Mastercard</span>
          <span>💳 Maestro</span>
          <span>💳 Visa</span>
        </div>
      </div>
    </footer>
  )
}
