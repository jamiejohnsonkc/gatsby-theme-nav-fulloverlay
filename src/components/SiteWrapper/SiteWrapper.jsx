/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

const SiteWrapper = ({ siteWrapperBgColor, siteWrapperFlexDir, ...props }) => {
	const [navOpen, setNavOpen] = useState(false)

	return (
		<Box
			className='siteWrapper'
			{...props}
			sx={{
				display: 'flex',
				backgroundColor: `${siteWrapperBgColor}`,
				flexDirection: `${siteWrapperFlexDir}`,
				position: 'relative',
				zIndex: '1',
				height: '100%',
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
