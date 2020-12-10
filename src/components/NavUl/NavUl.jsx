/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'

const NavUl = (props) => (
    <ul
        {...props}
        sx={{
            listStyle: 'none',
            display: 'flex',
            paddingInlineStart: '0',
            flexFlow: `column nowrap`,
        }}
    >
        {props.children}
    </ul>
)
// }
NavUl.propTypes = {
    // navUlVariant: PropTypes.any,
}

NavUl.defaultProps = {
    // navUlVariant: 'nav.fullOverlayNavUl',
}

export default NavUl
