import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
      <header>
        <Link
          to='/'>
          <h1>växt.nu</h1>
        </Link>
      </header>
    </div>
  )
}