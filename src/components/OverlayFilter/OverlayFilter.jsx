/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const OverlayFilter = ({ navOpen, props }) => {
	return (
		<Box
			{...props}
			navOpen={navOpen}
			className='overLayFilter'
			// navOpen={navOpen}
			sx={{
				height: '100%',
				width: '100%',
				left: '0px',
				left: '0px',
				// zIndex: '50',
				position: 'absolute',
				backgroundColor: `rgba(0, 0, 0, 0.8)`,
				transition: 'opacity 0.3s ease-out 0s',
				opacity: (props) => (navOpen ? '1' : '0'),
				zIndex: (props) => (navOpen ? '50' : '1'),
				willChange: 'opacity, z-index',
			}}
		/>
	)
}
OverlayFilter.propTypes = {}

OverlayFilter.defaultProps = {}

export default OverlayFilter
