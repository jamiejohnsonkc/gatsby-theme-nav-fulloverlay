/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'
import React from 'react'
import NavUl from '../NavUl'
import NavLi from '../NavLi'
import Data from '../../../../jamiejohnsonkc/src/data/navLinks.json'

const RightNavMenu = ({
    navMenuItemHover,
    linkTo,
    hoverTransition,
    navOpen,
    setNavOpen,
    ...props
}) => {
    return (
        <>
            <NavUl
                {...props}
                className="rightNavMenu"
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
                {Data.navLinks.map((link, id) => (
                    <NavLi key={id}>
                        <Link to={link.to} className="activeClassName">
                            {link.name}
                        </Link>
                    </NavLi>
                ))}
            </NavUl>
        </>
    )
}

export default RightNavMenu
