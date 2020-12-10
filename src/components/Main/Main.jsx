/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const Main = ({ variant, ...props }) => (
    <>
        <Box
            as="main"
            {...props}
            sx={{
                variant: `${variant}`,
            }}
        >
            {props.children}
        </Box>
    </>
)

Main.propTypes = {
    children: PropTypes.any,
}

Main.defaultProps = {
    children: 'main',
}

export default Main
