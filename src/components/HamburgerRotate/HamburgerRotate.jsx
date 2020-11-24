/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import RightNav from '../RightNav'

const HamburgerRotate = ({ navOpen, setNavOpen, ...props }) => {
	return (
		<Box
			className='hamburgerWrapper'
			{...props}
			sx={{
				position: 'relative',
				display: 'inline-flex',
				'@media (max-width: 40em)': {
					display: 'inline-flex',
					background: 'transparent',
					justifyContent: 'space-around',
					alignItems: 'center',
					zIndex: '20',
					height: '2em',
					width: '2em',
				},
			}}
		>
			<div
				{...props}
				navOpen={navOpen}
				sx={{
					// alignSelf: 'center',

					flexFlow: 'column nowrap',
					position: 'fixed',
					backgroundColor: 'background',
					borderRadius: '9999px',
					width: '2em',
					height: '.25em',
					transition: 'all 0.3s linear',
					flex: `1 1 auto`,

					// '@media (max-width: 40em)': {
					transform: (props) => (navOpen ? 'rotate(-45deg)' : 'inherit'),
					transition: 'all 0.3s linear',
					backgroundColor: (props) => (navOpen ? 'white' : 'primary'),
					'&::before, &::after': {
						position: 'absolute',
						content: '" "',
						backgroundColor: (props) => (navOpen ? 'white' : 'inherit'),
						borderRadius: '9999px',
						width: '2em',
						height: '.25em',
					},
					'&::before': {
						transform: (props) =>
							navOpen ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)',

						top: '-10px',
						// width: '2em',
						// height: '.25em',
						// backgroundColor: 'primary',
					},

					'&::after': {
						opacity: (props) => (navOpen ? '0' : '1'),
						transform: (props) => (navOpen ? 'rotate(90deg) ' : 'rotate(0deg)'),
						top: '10px',
						// width: '2em',
						// height: '.25em',
						// backgroundColor: 'primary',
					},
					// },
				}}
			/>
		</Box>
	)
}
HamburgerRotate.propTypes = {}

HamburgerRotate.defaultProps = {}

export default HamburgerRotate
