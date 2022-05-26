/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import styled from '@emotion/styled'

const StyledSpan = styled.span``

const SandwhichSpan = ({ menuOpen, setMenuOpen, ...props }) => {
    return (
        <StyledSpan
            className="sandwhichSpan"
            menuOpen={menuOpen}
            {...props}
            sx={{
                backgroundColor: 'headerElement',
                height: '.25em',
                left: ['25%', '25%', '25%', '25%', '25%'],
                position: 'absolute',
                top: `calc(50% - 2px)`,
                transition:
                    'background-color 0.2s ease-in 0s, transform 0.3s ease-out',
                width: ['16px', '18px', '18px', '18px', '18px'],

                willChange: 'background-color, transform',
            }}
        />
    )
}

const SandwhichRotate = ({ menuOpen, setMenuOpen, ...props }) => {
    return (
        <Box
            {...props}
            menuOpen={menuOpen}
            className="navToggle"
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
                    opacity: (props) => (menuOpen ? '1' : '0'),
                    backgroundColor: (props) =>
                        menuOpen ? 'headerElementBg' : 'transparent',
                    transform: (props) =>
                        menuOpen
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
                    backgroundColor: (props) =>
                        menuOpen ? 'white' : 'headerElement',
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
                        menuOpen
                            ? 'rotate(45deg) translate3d(0px, 0%, 0px)'
                            : 'rotate(0) translate3d(0px, -100%, 0px)',
                }}
            />
            <SandwhichSpan
                {...props}
                sx={{
                    transform: (props) =>
                        menuOpen
                            ? 'rotate(-45deg) translate3d(0px, 0%, 0px)'
                            : 'rotate(0) translate3d(0px, 100%, 0px)',
                }}
            />
        </Box>
    )
}

export default SandwhichRotate
