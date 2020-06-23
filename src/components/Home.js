import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchIsFeatured } from 'reducers/products'
import { ProductCard } from './ProductCard'
import { LoadingIndicator } from './LoadingIndicator'

export const Home = (props) => {

  const dispatch = useDispatch()
  useEffect(() => {
    console.log("useEffect")
    dispatch(fetchIsFeatured())
  }, [dispatch])

  const featuredProducts = useSelector((state) => state.products.isFeatured)

  return (
    <main>
      <div className='featured-products-wrapper'>
        <h1 className='page-title'>
          FAVORITER JUST NU:
        </h1>

        <LoadingIndicator />

        <div className='products'>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <section className='home-img-wrapper'>
        <img className='home-img' src={require('images/greenhouse.jpg')} alt="our greenhouse" />
        <h1 className='home-img-text'>BESÖK OSS</h1>
        {/* add a link? */}
      </section>

    </main>
  )
}
