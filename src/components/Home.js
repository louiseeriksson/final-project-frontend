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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

          {/* <Link
            to="/product/:productId">
            <ProductCard />
          </Link> */}

        </section>

        <section className='highlight-section'>
          <img src={require('images/greenhouse.jpg')} alt="our greenhouse" />
        </section>

        <section>

          INSTAGRAM FEED
          {/* <div id="curator-feed-default-layout"><a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a></div> */}


          {/* (function(){
          var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
          i.src = "https://cdn.curator.io/published/06e53367-5e99-4513-b597-e96cf8f67876.js";
          e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
          })() */}


        </section>
      </main>

      <Footer />

    </div>
  )
}