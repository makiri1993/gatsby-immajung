import * as React from 'react';
import styled from 'react-emotion'

interface HeroimageProps {
	img: string
}

interface HeroimageState {
}

export default class Heroimage extends React.Component<HeroimageProps, HeroimageState> {
	constructor(props: HeroimageProps) {
		super(props)
		this.state = { }
	}
	public render() {
		return(
			<HeroImg src={this.props.img}/>
		);
	}
}

const HeroImg = styled('img')`
	height: 100%;
	width: auto;
`
