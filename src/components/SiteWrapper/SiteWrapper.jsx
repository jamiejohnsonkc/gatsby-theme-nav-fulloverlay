/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

const SiteWrapper = ({ siteWrapperBgColor, siteWrapperFlexDir, ...props }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <Box
            className="siteWrapper"
            {...props}
            sx={{
                display: 'flex',
                backgroundColor: [
                    null,
                    `${siteWrapperBgColor}`,
                    null,
                    null,
                    null,
                    null,
                ],
                flexDirection: `${siteWrapperFlexDir}`,
                position: 'relative',
                zIndex: '1',
                height: '100%',
                // width: '100vw',
            }}
        />
    )
}

SiteWrapper.propTypes = {
    siteWrapperBgColor: PropTypes.any,
    siteWrapperFlexDir: PropTypes.any,
}

SiteWrapper.defaultProps = {
    siteWrapperBgColor: 'liveArea',
    siteWrapperFlexDir: 'column',
}

export default SiteWrapper
