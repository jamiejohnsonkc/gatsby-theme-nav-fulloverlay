/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import React from 'react'
import NavUl from '../NavUl'
import NavLi from '../NavLi'
import Data from '../../data/navLinks.json'
// import Data from '../../../../jamiejohnsonkc/src/data/navLinks.json'

const RightNavMenu = ({
    // navMenuItemHover,
    linkTo,
    // hoverTransition,
    navOpen,
    setNavOpen,
    ...props
}) => {
    const closeMenu = (e) => {
        setNavOpen(false)
    }

    return (
        <div
            className="rightNavMenuContainer"
            navOpen={navOpen}
            setNavOpen={setNavOpen}
        >
            <NavUl
                {...props}
                className="rightNavMenu"
                navOpen={navOpen}
                setNavOpen={setNavOpen}
                sx={{
                    minHeight: ['16em', '16em', '30em', '30em', '30em'],
                    flex: [
                        '2.5 0 auto',
                        '1.5 0 auto',
                        '1.5 0 auto',
                        '1.5 0 auto',
                        '1.5 0 auto',
                    ],
                    justifyContent: [
                        'space-around',
                        'space-around',
                        'center',
                        'center',
                        'center',
                    ],
                    minWidth: '100%',
                    pl: [3, 3, 0, 0, 0],
                }}
            >
                {Data.navLinks.map((link) => (
                    <NavLi
                        key={link.id}
                        navOpen={navOpen}
                        setNavOpen={setNavOpen}
                        onClick={closeMenu}
                    >
                        <Link to={link.to} className="activeClassName">
                            {link.name}
                        </Link>
                    </NavLi>
                ))}
            </NavUl>
        </div>
    )
}

export default RightNavMenu
