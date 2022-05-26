/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { useState, useRef } from 'react'
import RightNavMenu from '../RightNavMenu/RightNavMenu'

const RightNavContainer = ({ menuOpen, setMenuOpen, ...props }) => {
    return (
        <div menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
            <div
                {...props}
                className="navContainer"
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                sx={{
                    margin: '0px',
                    minWidth: '0px',
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'no-wrap',
                    backgroundColor: 'background',
                    flexDirection: 'column',
                    height: '100vh',
                    position: 'fixed',
                    right: '0px',
                    top: '0px',
                    width: '100%',
                    willChange: 'transform',
                    zIndex: '6',
                    alignItems: 'start',
                    transform: (props) =>
                        menuOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.35s ease-in-out',
                    py: ['unset', 4, 4, 4, 4, 4],
                    px: ['unset', 4, 4, 4, 4, 4],
                    '@media screen and (min-width: 56em)': {
                        py: 5,
                        px: 6,
                        width: '50%',
                    },
                }}
            >
                {/* <RightNavMenu menuOpen={menuOpen} /> */}
                <RightNavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            </div>
        </div>
    )
}

export default RightNavContainer
