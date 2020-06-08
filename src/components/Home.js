import React, { useEffect, useState } from 'react'
import { ProductList } from './ProductList'
import { InstagramFeed } from './InstagramFeed'

export const Home = (props) => {

  // is following function ok?
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.curator.io/published/06e53367-5e99-4513-b597-e96cf8f67876.js"
    script.async = true
    document.body.appendChild(script)

    // hämta produkter som är "featured" (via Redux) i actions (men inte i en fetch just här) 
    // /products?featured=true
  })

  return (
    <main>
      {/* <ProductList products={props.products} /> */}

      <section className='highlight-section'>
        {/* <img src={require('images/greenhouse.jpg')} alt="our greenhouse" /> */}
      </section>

      <InstagramFeed />

    </main>
  )
}