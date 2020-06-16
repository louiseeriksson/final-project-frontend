import React from 'react'

export const Home = (props) => {
  return (
    <main>
      <section className='highlight-section'>
        {/* <ProductList products={props.products} /> 
        /products?featured=true */}
      </section>

      <section className=''>
        <img className='home-img' src={require('images/greenhouse.jpg')} alt="our greenhouse" />
      </section>

    </main>
  )
}