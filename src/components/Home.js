import React, { useEffect, useState } from 'react'
import { ProductCard } from './ProductCard'
import { Footer } from './Footer'

export const Home = () => {
  return (
    <main>
      <section className='featured-products'>

        {/* These products cant be added to the cart yet, have to figure out how to choose a few featured products and show them here but still make them connected to the cart */}

        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}

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
  )
}