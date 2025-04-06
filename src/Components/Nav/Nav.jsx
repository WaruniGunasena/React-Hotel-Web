import React, { useRef } from 'react'
import navCSS from './../Nav/Nav.module.css'

function Nav  () {

  const menu = useRef();

  const menuHandler = () => {
    menu.current.classList.toggle(navCSS.showNav);
  }

  return (
    <div className={navCSS.nav_wrapper}>
        <div className={navCSS.logo}>
            <a href='#'><span>Mount</span>Top<span>Chalet</span></a>
        </div>
        <ul ref={menu}>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Category</a></li>
            <li><a href='#'>Rooms</a></li>
            <li><a href='#'>Testimonials</a></li>
            <li><a href='#'>Blogs</a></li>
        </ul>

        <div className={navCSS.nav_btns}>
            <button>Book Now</button>
            <i 
                className={`ri-menu-4-line ${navCSS.menu_icon} ${navCSS.hide_on_large}`} 
                onClick={menuHandler}
                role="button" 
                aria-label="Menu toggle"
            ></i>
        </div>
    </div>
  )
}

export default Nav