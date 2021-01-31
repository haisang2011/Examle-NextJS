import React from 'react'
import PropTypes from 'prop-types'
import styleNavbar from './navbar.module.css';

function Navbar(props) {
    return (
        <div className={styleNavbar.navbar}>
            {/* <ul className={styleNavbar.navbar__list}>
                <li>Home</li>
                <li>Product</li>
            </ul> */}
            <div className={styleNavbar.box}></div>
        </div>
    )
}

Navbar.propTypes = {

}

export default Navbar

