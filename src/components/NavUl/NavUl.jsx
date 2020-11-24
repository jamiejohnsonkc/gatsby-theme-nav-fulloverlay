/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'

// const NavUl = ({ navOpen, setNavOpen, ...props }) => {
// 	return (
const NavUl = (props) => (
	<ul
		{...props}
		// navOpen={navOpen}
		sx={{
			// variant: `${props.navUlVariant}`,
			listStyle: 'none',
			display: 'flex',
			paddingInlineStart: '0',
			// flexDirection: 'row',
			// flexWrap: 'nowrap',
			// '@media (max-width: 40em)': {
			flexFlow: `column nowrap`,
			// position: ['fixed', 'fixed', 'fixed', 'fixed'],
			// transform: (props) => (navOpen ? 'translateX(0)' : 'translateX(100%)'),
			// transition: `transform 0.3s ease-in-out`,
			// top: '0',
			// right: '0',
			// height: '80vh',
			// },
		}}
	>
		{props.children}
	</ul>
)
// }
NavUl.propTypes = {
	// navUlVariant: PropTypes.any,
}

NavUl.defaultProps = {
	// navUlVariant: 'nav.fullOverlayNavUl',
}

export default NavUl
