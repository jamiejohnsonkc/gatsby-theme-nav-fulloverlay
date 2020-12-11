/** @jsx jsx */
import { jsx, useState } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import animation from '../../../../gatsby-theme-scroll-reveal/animation'

// const NavLi = ({ navOpen, setNavOpen, ...props }) => {
const NavLi = (props) => {
    // const closeMenu = (e) => {
    //     setNavOpen(false)
    // }

    return (
        <li
            {...props}
            {...animation.slideLeft}
            // onClick={closeMenu}
            // navOpen={navOpen}
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
