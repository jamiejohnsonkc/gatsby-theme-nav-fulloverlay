/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import styled from '@emotion/styled'

const StyledSpan = styled.span``

const SandwhichSpan = ({ navOpen, setNavOpen, ...props }) => {
	return (
		<StyledSpan
			className='sandwhichSpan'
			navOpen={navOpen}
			{...props}
			sx={{
				backgroundColor: 'headerElement',
				height: '.25em',
				left: ['25%', '25%', '25%', '25%', '25%'],
				position: 'absolute',
				top: `calc(50% - 2px)`,
				transition: 'background-color 0.2s ease-in 0s, transform 0.3s ease-out',
				width: ['16px', '18px', '18px', '18px', '18px'],

				willChange: 'background-color, transform',
			}}
		/>
	)
}

const SandwhichRotate = ({ navOpen, setNavOpen, ...props }) => {
	return (
		<Box
			{...props}
			navOpen={navOpen}
			className='navToggle'
			sx={{
				display: 'block',
				textAlign: 'center',
				verticalAlign: 'middle',
				backgroundColor: 'transparent',
				border: '0px',
				cursor: 'pointer',
				height: ['32px', '36px', '36px', '36px', '36px'],
				width: ['32px', '36px', '36px', '36px', '36px'],
				margin: '0px',
				outline: 'none',
				pointerEvents: 'all',
				position: 'relative',

				'&::before': {
					content: `''`,
					borderRadius: '50%',
					height: ['150%', '150%', '150%', '150%', '150%'],
					width: '150%',
					top: ['-25%', '-25%', '-25%', '-25%', '-25%'],
					left: ['-25%', '-25%', '-25%', '-25%', '-25%'],
					position: 'absolute',
					opacity: (props) => (navOpen ? '1' : '0'),
					backgroundColor: (props) =>
						navOpen ? 'headerElementBg' : 'transparent',
					transform: (props) =>
						navOpen
							? 'scale(1) translate3d(0,0,0)'
							: 'scale(0.6) translate3d(100%,0,0)',
					transition:
						'background-color 0.2s ease-in 0s, opacity 0.3s ease-out 0s, transform 0.3s ease-in 0s',
					willChange: 'opacity, transform, background-color',
				},

				'&:hover::before': {
					backgroundColor: 'headerElementBgHover',
					opacity: '1',
					transform: 'translate3d(0,0,0)',
				},
				'& > span': {
					backgroundColor: (props) => (navOpen ? 'white' : 'headerElement'),
					// left: ['20%', '24%'],
				},
				'&:hover > span': {
					backgroundColor: 'headerElementHover',
				},
			}}
		>
			<SandwhichSpan
				{...props}
				sx={{
					transform: (props) =>
						navOpen
							? 'rotate(45deg) translate3d(0px, 0%, 0px)'
							: 'rotate(0) translate3d(0px, -100%, 0px)',
				}}
			/>
			<SandwhichSpan
				{...props}
				sx={{
					transform: (props) =>
						navOpen
							? 'rotate(-45deg) translate3d(0px, 0%, 0px)'
							: 'rotate(0) translate3d(0px, 100%, 0px)',
				}}
			/>
		</Box>
	)
}

export default SandwhichRotate
