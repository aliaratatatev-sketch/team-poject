import { useState } from 'react'
import './About.css'

function About() {
  const [products, setProducts] = useState([])
  const [form, setForm] = useState({
    photo: '',
    name: '',
    price: '',
    discount: ''
  })

  function handleChange(event) {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function addProduct() {
    const trimmedPhoto = form.photo.trim()
    const trimmedName = form.name.trim()
    const priceValue = Number(form.price)
    const discountValue = Number(form.discount)

    if (!trimmedPhoto || !trimmedName || form.price === '' || form.discount === '') {
      return
    }

    if (Number.isNaN(priceValue) || Number.isNaN(discountValue)) {
      return
    }

    const newProduct = {
      id: Date.now(),
      photo: trimmedPhoto,
      name: trimmedName,
      price: priceValue,
      discount: discountValue
    }

    setProducts([...products, newProduct])
    setForm({
      photo: '',
      name: '',
      price: '',
      discount: ''
    })
  }

  function deleteProduct(id) {
    const updatedProducts = products.filter((product) => product.id !== id)
    setProducts(updatedProducts)
  }

  return (
    <div className="about-page">
      <div className="about-container">
        <section className="about-form-card">
          <h2>Add a new product</h2>
          <p className="about-text">
            Fill in the form and add a product to your store list.
          </p>

          <div className="input-group">
            <label>Photo URL</label>
            <input
              type="text"
              name="photo"
              value={form.photo}
              onChange={handleChange}
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          <div className="input-group">
            <label>Product name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter product name"
            />
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
                min="0"
                step="0.01"
                placeholder="0"
              />
            </div>

            <div className="input-group">
              <label>Discount %</label>
              <input
                type="number"
                name="discount"
                value={form.discount}
                onChange={handleChange}
                min="0"
                max="100"
                step="1"
                placeholder="0"
              />
            </div>
          </div>

          <button className="add-btn" onClick={addProduct}>
            Add product
          </button>
        </section>

        <section className="products-section">
          <h3>Products list</h3>

          {products.length === 0 ? (
            <div className="empty-state">
              <p>No products yet. Add the first one.</p>
            </div>
          ) : (
            <div className="products-grid">
              {products.map((product) => {
                const finalPrice = product.price - (product.price * product.discount) / 100

                return (
                  <div className="product-card" key={product.id}>
                    <img src={product.photo} alt={product.name} className="product-image" />

                    <div className="product-info">
                      <h4>{product.name}</h4>
                      <p className="product-price">
                        Original price: <span>${product.price.toFixed(2)}</span>
                      </p>
                      <p className="product-discount">
                        Discount: <span>{product.discount}%</span>
                      </p>
                      <p className="final-price">
                        Final price: <span>${finalPrice.toFixed(2)}</span>
                      </p>
                    </div>

                    <button className="delete-btn" onClick={() => deleteProduct(product.id)}>
                      Delete
                    </button>
                  </div>
                )
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default About
