/** @jsx jsx */
import { jsx, useState } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import animation from '../../../../gatsby-theme-scroll-reveal/animation'

//TODO clean up notes

// const NavLi = ({ menuOpen, setMenuOpen, ...props }) => {
const NavLi = (props) => {
    // const closeMenu = (e) => {
    //     setMenuOpen(false)
    // }

    return (
        <li
            {...props}
            {...animation.slideLeft}
            // onClick={closeMenu}
            // menuOpen={menuOpen}
            sx={{}}
        />
    )
}

NavLi.propTypes = {
    liVariant: PropTypes.any,
}

NavLi.defaultProps = {
    liVariant: 'nav.fullOverlayNavLi',
}

export default NavLi
