/** @jsx jsx */
import { jsx, Box } from 'theme-ui'
import React from 'react'
import PropTypes from 'prop-types'
import FpoLogo from '../FpoLogo'
import FpoGlyph from '../FpoGlyph'
import { Link } from 'gatsby'

//todo refactor separate layout / style attributes

const Brand = ({
    brandHeight,
    largeScreenBrand,
    smallScreenBrand,
    display,
    ...props
}) => (
    <>
        <Link
            to="/"
            {...props}
            sx={{
                display,
                height: [
                    '2em',
                    '3em',
                    '3em',
                    '3em',
                    '3em',
                    '3em',
                    '3em',
                    '3em',
                ],
            }}
        >
            <Box
                className="largeScreenBrand"
                {...props}
                sx={{
                    display: [
                        'none',
                        'none',
                        'inline-grid',
                        'inline-grid',
                        'inline-grid',
                        'inline-grid',
                        'inline-grid',
                    ],
                }}
            >
                {largeScreenBrand}
            </Box>
            <Box
                className="smallScreenBrand"
                {...props}
                sx={{
                    display: [
                        'inline-grid',
                        'inline-grid',
                        'none',
                        'none',
                        'none',
                        'none',
                        'none',
                    ],
                    justifySelf: 'end',
                }}
            >
                {smallScreenBrand}
            </Box>
        </Link>
    </>
)

Brand.propTypes = {
    largeScreenBrand: PropTypes.any,
    smallScreenBrand: PropTypes.any,
}

Brand.defaultProps = {
    largeScreenBrand: <FpoLogo />,
    smallScreenBrand: <FpoGlyph />,
}

export default Brand
