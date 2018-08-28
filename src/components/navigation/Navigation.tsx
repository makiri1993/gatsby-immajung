import * as React from 'react'
import styled from 'react-emotion'
import { colors } from '../../styles/variables'

interface NavigationProps {}

interface NavigationState {}

export default class Navigation extends React.Component<
  NavigationProps,
  NavigationState
> {
  constructor(props: NavigationProps) {
    super(props)
    this.state = {}
  }
  public render() {
    return (
      <MenuContainer>
        <MenuUl>
          <MenuLi>home</MenuLi>
          <MenuLi>about</MenuLi>
          <MenuLi>shop</MenuLi>
          <MenuLi>lookbook</MenuLi>
        </MenuUl>
      </MenuContainer>
    )
  }
}

const MenuContainer = styled('div')`
  width: 300px;
  height: 300px;
  margin-left: 250px;
  background-color: ${colors.lila};
  display: flex;
  font-size: 1.7rem;
`

const MenuUl = styled('ul')`
  color: ${colors.white};
  list-style: none;
  margin-top: 25px;
  margin-left: 25px;
`

const MenuLi = styled('li')`
  list-style: none;
  margin-top: 8px;
`
