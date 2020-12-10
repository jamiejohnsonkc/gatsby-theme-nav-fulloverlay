/** @jsx jsx */
import { jsx } from 'theme-ui'
import React, { useState } from 'react'
// import RightNav from '../RightNav'
// import HamburgerRotate from '../HamburgerRotate/HamburgerRotate'
import SandwhichRotate from '../SandwhichRotate'

const NavToggle = ({ display, navOpen, ...props }) => {
    return (
        <>
            <SandwhichRotate
                {...props}
                navOpen={navOpen}
                // onClick={() => setNavOpen(!navOpen)}
                display={display}
            />
        </>
    )
}

export default NavToggle
