import React from 'react'
import { useSelector } from 'react-redux'

export const LoadingIndicator = () => {
  const isLoading = useSelector((state) => state.ui.isLoading)

  return (
    <>
      {isLoading && <div className='page-wrapper'>
        <img className='loader-svg' src={require('../images/loader.svg')} alt="loading" />
        <p>loading..</p>
      </div>}
    </>
  )
}