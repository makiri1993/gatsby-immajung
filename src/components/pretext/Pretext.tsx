import * as React from 'react';
import styled from 'react-emotion'

interface PretextProps {
	pretext: string
}

interface PretextState {
}

export default class Pretext extends React.Component<PretextProps, PretextState> {
	constructor(props: PretextProps) {
		super(props)
		this.state = { }
	}
	public render() {
		return(
			<PretextContainer>
				<p>{this.props.pretext}</p>
			</PretextContainer>
		);
	}
}

const PretextContainer = styled('div')`
	position: absolute;
	font-size: 1.7rem;
	width: 350px;
	margin-top: -550px;
	margin-left: -150px;
`
