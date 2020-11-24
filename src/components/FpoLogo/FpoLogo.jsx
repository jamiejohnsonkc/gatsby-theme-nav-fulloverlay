/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import PropTypes from 'prop-types'
import LogoIpsum from '../../svg/assets/fpo/logo-1.svg'

const FpoLogo = (props) => (
	<>
		<LogoIpsum
			{...props}
			sx={{
				fill: 'primary',
				width: '100%',
			}}
		/>
	</>
)

FpoLogo.propTypes = {}

FpoLogo.defaultProps = {}

export default FpoLogo
