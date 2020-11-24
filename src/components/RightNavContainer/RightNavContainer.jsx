/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { useState } from 'react'
import RightNavMenu from '../RightNavMenu/RightNavMenu'
import ContactIconsBar from '../../../../devSite/src/components/product/templates/elements/ContactIconsBar'

const RightNavContainer = ({ navOpen, props }) => {
    useState({ navOpen })
    return (
        <Box
            {...props}
            className="navContainer"
            navOpen={navOpen}
            sx={{
                margin: '0px',
                minWidth: '0px',
                display: 'flex',
                alignItems: 'baseline',
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
                zIndex: '50',
                alignItems: 'start',
                transform: (props) =>
                    navOpen ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.35s ease-in-out',
                py: ['unset', 4, 4, 4, 4],
                px: ['unset', 4, 4, 4, 4],
                '@media screen and (min-width: 56em)': {
                    py: 5,
                    px: 6,
                    width: '50%',
                },
            }}
        >
            <RightNavMenu />
            <ContactIconsBar
                linkBoxTransform="translateY(25px)"
                display="flex"
                flex="1 0 auto"
                width={['100%', '100%', '18em', '18em', '18em']}
                alignItems="center"
                minHeight="4em"
                alignSelf="stretch"
                paddingLeft="16px"
            />
        </Box>
    )
}

export default RightNavContainer
