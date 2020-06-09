import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <div>
      <header>
        <div className='nav-bar'>
          <NavLink
            to='/products'>
            <h2>SHOP</h2>
          </NavLink>
          <NavLink
            to='/inspiration'>
            <h2>INSPIRATION</h2>
          </NavLink>
          <NavLink
            to='/about'>
            <h2>OM OSS</h2>
          </NavLink>
          <NavLink
            to='/cart'>
            <h2>VARUKORG</h2>
          </NavLink>
        </div>
        <Link
          to='/'>
          <h1>växt.nu</h1>
        </Link>
      </header>
    </div>
  )
}