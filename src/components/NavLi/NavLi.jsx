/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
// import animation from '../../../../gatsby-theme-scroll-reveal/animation'

const NavLi = (props) => (
    <li
        {...props}
        // {...animation.slideLeft}
        sx={{}}
    />
)

NavLi.propTypes = {
    // liVariant: PropTypes.any,
}

NavLi.defaultProps = {
    // liVariant: 'nav.fullOverlayNavLi',
}

export default NavLi
