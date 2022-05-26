/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useState } from 'react'
// import RightNav from '../RightNav'
// import HamburgerRotate from '../HamburgerRotate/HamburgerRotate'
import SandwhichRotate from '../SandwhichRotate'

const NavToggle = ({ display, menuOpen, ...props }) => {
    return (
        <>
            <SandwhichRotate
                {...props}
                menuOpen={menuOpen}
                // onClick={() => setMenuOpen(!menuOpen)}
                display={display}
            />
        </>
    )
}

export default NavToggle
