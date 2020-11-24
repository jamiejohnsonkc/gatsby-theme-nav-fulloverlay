/** @jsx jsx */
import { jsx, Box } from 'theme-ui'

import PropTypes from 'prop-types'
import React, { useState } from 'react'
// import NavToggle from '../NavToggle'
// import RightNav from '../RightNav'
// import Brand from '../Brand'

const Navbar = (props) => {
	const [navOpen, setNavOpen] = useState(false)
	return (
		<Box
			{...props}
			as='nav'
			sx={{
				variant: `${props.navbarVariant}`,
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				width: '100%',
				position: 'fixed',
				zIndex: '1',
			}}
		>
			{/* <Brand
				{...props}
				sx={{
					variant: 'nav.mastHeadLogo',
					zindex: '1',
				}}
			/> */}

			{/* <NavToggle
				{...props}
				sx={{
					zIndex: '3',
				}}
				navOpen={navOpen}
				setNavOpen={setNavOpen}
			/> */}
			{/* <RightNav navOpen={navOpen} setNavOpen={setNavOpen} /> */}
		</Box>
	)
}

Navbar.propTypes = {
	navbarVariant: PropTypes.any,
}

Navbar.defaultProps = {
	// navbarVariant: 'nav.rightNavNavbar',
}

export default Navbar
