export default function Header({ setPath }) {
  return (
    <header className="top-header">
      <div className="verh-row">
        <div className="shapka-logo" onClick={() => setPath('home')}>
          <div className="logo-emoji">🌸</div>
          <div className="logo-titles">
            <span className="main-title">FLOWERS-UKRAINE</span>
            <span className="sub-title">доставка цветов и подарков</span>
          </div>
        </div>

        <div className="poisk-box">
          <div className="poisk-cat">
            <span>▼ Поиск по категориям</span>
          </div>
          <div className="poisk-input-wrap">
            <input type="text" placeholder="Поиск по товарам" />
            <button type="button">🔍</button>
          </div>
        </div>

        <div className="praviy-blok">
          <div className="soc-seti">
            <span>📷</span>
            <span>📘</span>
            <span>💬</span>
            <span>📞</span>
          </div>
          <div className="nomer-telefona">+38 (067) 829 30 30</div>
        </div>
      </div>

      <div className="nizh-row">
        <nav className="glav-nav">
          <button type="button" className="nav-link" onClick={() => setPath('catalog')}>
            Каталог товаров ▼
          </button>
          <button type="button" className="nav-link" onClick={() => setPath('home')}>
            Форум
          </button>
          <button type="button" className="nav-link" onClick={() => setPath('home')}>
            Отзывы
          </button>
          <button type="button" className="nav-link" onClick={() => setPath('home')}>
            Акции
          </button>
          <button type="button" className="nav-link" onClick={() => setPath('home')}>
            Новости
          </button>
          <button type="button" className="nav-link" onClick={() => setPath('home')}>
            Информация ▼
          </button>
        </nav>

        <div className="shapka-icons">
          <div className="btn-icon">
            <span>🤍</span>
            <sup className="schetchik">2</sup>
          </div>
          <div className="btn-icon">
            <span>🛒</span>
            <sup className="schetchik">1</sup>
            <span className="baks-korzina">₴ 1 520</span>
          </div>
        </div>
      </div>
    </header>
  )
}
