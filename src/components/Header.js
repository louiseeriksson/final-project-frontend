import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FixedCartPreview } from './FixedCartPreview'

export const Header = () => {
  return (
    <div>
      <header className='header'>

        {/* hamburger menu for smaller screens */}
        <nav role='navigation' className='hamburger-menu'>
          <div className='menu-toggle'>
            <input type="checkbox" />

            <div className='burger-line'></div>
            <div className='burger-line'></div>
            <div className='burger-line'></div>

            <ul className='menu'>
              <NavLink
                to='/'>
                <h2>VÄXT.NU</h2>
              </NavLink>
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
            </ul>

          </div>
        </nav>


        {/* nav-bar shows when screen is over 700px wide */}
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

        {/* big title */}
        <Link
          to='/'>
          <h1>växt.nu</h1>
        </Link>

        {/* preview of your cart if you've got products there */}
        <FixedCartPreview />

      </header>
    </div >
  )
}