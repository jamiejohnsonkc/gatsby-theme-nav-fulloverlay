/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
// import RightNav from '../RightNav'
import Brand from '../Brand'
import NavToggle from '../NavToggle'
import FpoLogo from '../FpoLogo'
import FpoGlyph from '../FpoGlyph'
// import Logo from '../../../../jamiejohnsonkc/src/components/product/bits/Logo'

const Header = ({
    navOpen,
    setNavOpen,
    // handleMenuToggle,
    display,
    ...props
}) => {
    const handleMenuToggle = (e) => {
        setNavOpen(!navOpen)
    }

    return (
        <>
            <Flex
                className="header"
                {...props}
                sx={{
                    py: [0, 3, 3, 3, 3],
                    px: [3, 4, 3, 3, 3],
                    margin: '0',
                    minWidth: '0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    zIndex: '100',
                    top: '16px',
                    right: ['0', '0', '32px', '32px', '32px'],
                    left: ['0', '0', '32px', '32px', '32px'],
                    position: 'fixed',
                }}
            >
                <Brand
                    // largeScreenBrand={<Logo />}
                    // smallScreenBrand={<Logo />}
                    display="inline-flex"
                />

                <NavToggle
                    {...props}
                    className="navToggle"
                    type="button"
                    onClick={handleMenuToggle}
                    navOpen={navOpen}
                    display="inline-flex"
                />
            </Flex>

            {/* <RightNav navOpen={navOpen} /> */}
        </>
    )
}
Header.propTypes = {
    largeScreenBrand: PropTypes.any,
    smallScreenBrand: PropTypes.any,
}

Header.defaultProps = {
    largeScreenBrand: <FpoLogo />,
    smallScreenBrand: <FpoGlyph />,
}

export default Header
