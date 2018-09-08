import Link from 'gatsby-link'
import * as React from 'react'
import styled from 'react-emotion'
import { colors, margins } from '../../styles/variables'

interface IHeaderProps {}

export default class Header extends React.Component <IHeaderProps> {
  constructor(props: IHeaderProps) {
    super(props)
    this.state = {}
  }

  public render() {
    return(
      <HeaderContainer>
        <HeaderLink to="/" title="Link to homepage">
         <HeaderTitle>immajung</HeaderTitle>
        </HeaderLink>
      </HeaderContainer>
    )
  }
}

const HeaderContainer = styled('div')`
  width: 100%;
  color: ${colors.black};
`

const HeaderTitle = styled('h1')`
  margin-left: ${margins.small}px;
  margin-top: ${margins.small}px;
`

const HeaderLink = styled(Link)`
  color: ${colors.black};
  text-decoration: none;
  :hover {
    text-decoration: underline;
  }
`
