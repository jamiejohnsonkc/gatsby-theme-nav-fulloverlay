/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import NavUl from '../NavUl'
import NavLi from '../NavLi'
import Data from '../../data/navLinks.json'
import HoverTextFill from '../../../../gatsby-theme-jim-components/src/components/fx/HoverTextFill/HoverTextFill'

const RightNavMenu = ({
	navMenuItemHover,
	linkTo,
	hoverTransition,
	...props
}) => {
	return (
		<>
			<NavUl
				{...props}
				className='rightNavMenu'
				sx={{
					minHeight: ['16em', '16em', '30em', '30em', '30em'],
					flex: [
						'2.5 0 auto',
						'1.5 0 auto',
						'1.5 0 auto',
						'1.5 0 auto',
						'1.5 0 auto',
					],
					justifyContent: [
						'space-around',
						'space-around',
						'center',
						'center',
						'center',
					],
					minWidth: '100%',
					pl: [3, 3, 0, 0, 0],
				}}
			>
				{Data.navLinks.map((link, id) => (
					<NavLi key={id}>
						<HoverTextFill
							{...props}
							sx={{
								color: 'navMenuItem',
								lineHeight: 2,
								fontWeight: 900,
								fontFamily: 'heading',
								letterSpacing: '-.025em',
								textTransform: 'captilalize',
								textDecoration: 'none',
								fontSize: [5, 6, 6, 8, 8],
								transition: 'transform 275ms ease',
								'&:before': {
									transition: 'transform 275ms ease',
									color: 'navMenuItemHover',
								},
							}}
							to={link.to}
							className='activeClassName'
						>
							{link.name}
						</HoverTextFill>
					</NavLi>
				))}
			</NavUl>
		</>
	)
}

export default RightNavMenu
