/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

const StyledUl = styled.ul``

const NavUl = (props) => (
    <StyledUl
        {...props}
        sx={{
            listStyle: 'none',
            display: 'flex',
            paddingInlineStart: '0',
            flexFlow: `column nowrap`,
        }}
    >
        {props.children}
    </StyledUl>
)
// }
NavUl.propTypes = {
    // navUlVariant: PropTypes.any,
}

NavUl.defaultProps = {
    // navUlVariant: 'nav.fullOverlayNavUl',
}

export default NavUl
