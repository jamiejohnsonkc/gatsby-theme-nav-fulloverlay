/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from 'theme-ui'
import React, { useState } from 'react'
import './style.css'
import Header from '../components/Header'
import SiteWrapper from '../components/SiteWrapper'
import RightNavContainer from '../components/RightNavContainer'
import OverlayFilter from '../components/OverlayFilter'
import FpoLogo from '../components/FpoLogo'
import FpoGlyph from '../components/FpoGlyph'

const NavOverlay = ({ largeScreenBrand, smallScreenBrand, ...props }) => {
	const [navOpen, setNavOpen] = useState(false)
	return (
		<>
			<SiteWrapper>
				<Header
					className='header'
					navOpen={navOpen}
					setNavOpen={setNavOpen}
					largeScreenBrand={largeScreenBrand}
					smallScreenBrand={smallScreenBrand}
				/>
				<OverlayFilter navOpen={navOpen} />
				<RightNavContainer navOpen={navOpen} />
				{props.children}
			</SiteWrapper>
		</>
	)
}

NavOverlay.propTypes = {
	children: PropTypes.any,
	largeScreenBrand: PropTypes.any,
	smallScreenBrand: PropTypes.any,
}

NavOverlay.defaultProps = {
	largeScreenBrand: <FpoLogo />,
	smallScreenBrand: <FpoGlyph />,
}

export default NavOverlay
