import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from './Header'
import { ProductCard } from './ProductCard'
import { Footer } from './Footer'

export const Home = () => {
  return (
    <div>

      <Header />

      <main>
        <section className='featured-products'>
          {/* <Link
            to="/product/:productId">
            <ProductCard />
          </Link>
          <Link
            to="/product/:productId">
            <ProductCard />
          </Link>
          <Link
            to="/product/:productId">
            <ProductCard />
          </Link>
          <Link
            to="/product/:productId">
            <ProductCard />
          </Link>
          <Link
            to="/product/:productId">
            <ProductCard />
          </Link> */}
        </section>

        <section>
          News/Tips/Link to artices/Blog
      </section>
      </main>

      <Footer />

    </div>
  )
}