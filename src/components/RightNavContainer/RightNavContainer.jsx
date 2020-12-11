/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { useState, useRef } from 'react'
import RightNavMenu from '../RightNavMenu/RightNavMenu'

const RightNavContainer = ({ navOpen, setNavOpen, ...props }) => {
    return (
        <div navOpen={navOpen} setNavOpen={setNavOpen}>
            <div
                {...props}
                className="navContainer"
                navOpen={navOpen}
                setNavOpen={setNavOpen}
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
                        navOpen ? 'translateX(0)' : 'translateX(100%)',
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
                {/* <RightNavMenu navOpen={navOpen} /> */}
                <RightNavMenu navOpen={navOpen} setNavOpen={setNavOpen} />
            </div>
        </div>
    )
}

export default RightNavContainer
