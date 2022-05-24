/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import GlyphIpsum from '../../svg/assets/fpo/glyph-1.svg'

const FpoGlyph = (props) => (
    <>
        <GlyphIpsum
            {...props}
            sx={{
                fill: 'primary',
                width: '100%',
            }}
        />
    </>
)

FpoGlyph.propTypes = {}

FpoGlyph.defaultProps = {}

export default FpoGlyph
