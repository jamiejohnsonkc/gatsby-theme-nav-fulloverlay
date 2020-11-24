/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import { Link } from 'gatsby'
// import Link from 'gatsby-plugin-transition-link'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

//TODO this comp was refacted out during development of new portfolio

const StyledLink = styled(Link)`
	 {
	}
`

const NavLink = (props) => (
	<StyledLink
		{...props}
		activeClassName='active'
		to={props.linkTo}
		sx={{
			variant: `${props.navLinkVariant}`,
			color: 'text',
		}}
		children={props.children}
	/>
)

NavLink.propTypes = {
	navLinkVariant: PropTypes.any,
	linkTo: PropTypes.any,
}

NavLink.defaultProps = {
	navLinkVariant: 'links.fullOverlayNavLink',
	linkTo: '/',
}

export default NavLink
