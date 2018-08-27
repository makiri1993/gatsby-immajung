import * as React from 'react';
import styled from 'react-emotion'

interface TitleProps {
	title: string
}

interface TitleState {
}

export default class Title extends React.Component<TitleProps, TitleState> {
	constructor(props: TitleProps) {
		super(props)
		this.state = { }
	}
	public render() {
		return(
			<TitleContainer>
				<h1>{this.props.title}</h1>
			</TitleContainer>
		);
	}
}

const TitleContainer = styled('div')`
	position: absolute;
	font-size: 2.5rem;
	width: 500px;
	margin-top: 250px;
	margin-left: 200px;
`

