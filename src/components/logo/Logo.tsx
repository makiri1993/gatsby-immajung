import * as React from 'react';
import styled from 'react-emotion'
import { colors } from '../../styles/variables'

interface LogoProps {
	logoPath: string
}

interface LogoState {
	logoPathChange: string
}

const logoPath: string = require('../logo/immajung_logo.svg')



export default class Logo extends React.Component<LogoProps, LogoState> {
	constructor(props: LogoProps) {
		super(props)
		this.state = { logoPathChange: this.props.logoPath}
	}
	public render() {
		return(
			<LogoContainer>
				<LogoImg src={logoPath} alt="immajung logo"/>
			</LogoContainer>
		);
	}
}

const LogoContainer = styled('div')`
width: 250px;
height: 150px;
display: flex;
align-items: center;
justify-content: center;
background-color: ${colors.black}
`

const LogoImg = styled('img')`
width: 80%;
`

