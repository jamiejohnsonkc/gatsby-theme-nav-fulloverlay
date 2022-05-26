/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx, Button } from 'theme-ui'
import React, { useState, useRef } from 'react'
import './style.css'
import Header from '../components/Header'
import SiteWrapper from '../components/SiteWrapper'
import RightNavContainer from '../components/RightNavContainer'
import OverlayFilter from '../components/OverlayFilter'
import FpoLogo from '../components/FpoLogo'
import FpoGlyph from '../components/FpoGlyph'
import useOutsideClick from '../components/useOutsideClick'
import Main from '../components/Main'

const NavOverlay = ({ largeScreenBrand, smallScreenBrand, ...props }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleMenuToggle = (e) => {
        setMenuOpen(!menuOpen)
    }

    const closeMenu = (e) => {
        setMenuOpen(false)
    }

    const ref = useRef()

    useOutsideClick(ref, () => {
        // alert('You clicked outside')
        if (menuOpen) setMenuOpen(false)
    })

    return (
        <>
            <SiteWrapper>
                <Header
                    className="header"
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                    largeScreenBrand={largeScreenBrand}
                    smallScreenBrand={smallScreenBrand}
                />
                <OverlayFilter menuOpen={menuOpen} />
                <div ref={ref}>
                    <RightNavContainer
                        menuOpen={menuOpen}
                        setMenuOpen={setMenuOpen}
                    />
                </div>
                {props.children}
            </SiteWrapper>
        </>
    )
}

NavOverlay.propTypes = {
    children: PropTypes.any,
    largeScreenBrand: PropTypes.any,
    smallScreenBrand: PropTypes.any,
}

NavOverlay.defaultProps = {
    largeScreenBrand: <FpoLogo />,
    smallScreenBrand: <FpoGlyph />,
}

export default NavOverlay
