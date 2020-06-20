import React from 'react'
// import React, { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { fetchProducts } from 'reducers/products'
// import { ProductCard } from './ProductCard'
// import { LoadingIndicator } from './LoadingIndicator'

export const Home = (props) => {

  // const dispatch = useDispatch()
  // useEffect(() => {
  //   console.log("useEffect")
  //   dispatch(fetchProducts())
  // }, [dispatch])

  // const featuredProducts = useSelector((state) => state.products.all.isFeatured)

  return (
    <main>
      {/* <section className='highlight-section'>
        <LoadingIndicator />
        <div className='products'>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section> */}

      <section className=''>
        <img className='home-img' src={require('images/greenhouse.jpg')} alt="our greenhouse" />
      </section>

    </main>
  )
}
