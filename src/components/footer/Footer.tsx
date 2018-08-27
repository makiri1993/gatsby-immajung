import * as React from 'react';
import styled from 'react-emotion'
import { colors } from '../../styles/variables'

interface FooterProps {
}

interface FooterState {
}




export default class Footer extends React.Component<FooterProps, FooterState> {
	constructor(props: FooterProps) {
		super(props)
		this.state = { }
	}
	public render() {
		return(
			<MenuContainer>
				<MenuUl>
					<MenuLi>instagram</MenuLi>
					<MenuLi>contact</MenuLi>
					<MenuLi>impressum</MenuLi>
				</MenuUl>
			</MenuContainer>
		);
	}
}

const MenuContainer = styled('div')`
	position: absolute;
	width: 300px;
	height: 400px;
	margin-left: 50px;
	margin-top: -50px;
	background-color: ${colors.green};
	filter: invert();
	display: flex;
	justify-content: center;
	font-size: 1.7rem;
`

const MenuUl = styled('ul')`
	color: ${colors.black};
	list-style: none;
	margin-top: 15px;
`

const MenuLi = styled('li')`
	list-style: none;
	margin-top: 8px;
`
