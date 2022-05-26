/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const OverlayFilter = ({ menuOpen, props }) => {
    return (
        <Box
            {...props}
            menuOpen={menuOpen}
            className="overLayFilter"
            // menuOpen={menuOpen}
            sx={{
                height: '100%',
                width: '100%',
                left: '0px',
                top: '0px',
                // zIndex: '50',
                position: 'fixed',
                backgroundColor: `rgba(0, 0, 0, 0.8)`,
                transition: 'opacity 0.3s ease-out 0s',
                opacity: (props) => (menuOpen ? '1' : '0'),
                zIndex: (props) => (menuOpen ? '5' : '1'),
                willChange: 'opacity, z-index',
            }}
        />
    )
}
OverlayFilter.propTypes = {}

OverlayFilter.defaultProps = {}

export default OverlayFilter
