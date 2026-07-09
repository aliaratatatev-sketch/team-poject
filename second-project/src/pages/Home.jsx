import React from 'react'
import {
  Banner,
  InfoBlocks,
  ProductSection,
  ForumSection,
  ContactsSection,
  Footer
} from '../components/HomeSections'
import { aksiiProducts, sezonniyeProducts, podarkyProducts } from '../data/products'

export default function Home({ setPath }) {
  return (
    <>
      <Banner />
      <InfoBlocks />
      <ProductSection
        title="Акции"
        products={aksiiProducts}
        showDiscount={true}
        showOldPrice={true}
      />
      <ProductSection
        title="Сезонные"
        products={sezonniyeProducts}
      />
      <ProductSection
        title="Подарки"
        products={podarkyProducts}
      />
      <ForumSection />
      <ContactsSection />
      <Footer />
    </>
  )
}
