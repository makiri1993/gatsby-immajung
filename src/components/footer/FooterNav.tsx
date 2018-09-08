import * as React from 'react'
import styled from 'react-emotion'
import { colors, margins } from '../../styles/variables'
import Link from 'gatsby-link'

interface IFooterNavProps {}

export default class FooterNav extends React.Component<IFooterNavProps> {
  constructor(props: IFooterNavProps) {
    super(props)
    this.state = {}
  }
  public render() {
    return(
      <FooterNavContainer>
        <FooterNavUL>
          <FoterNavLI>
            <FoterNavLink href="#">Impressum</FoterNavLink>
          </FoterNavLI>
          <FoterNavLI>
            <FoterNavLink href="#">Datenschutz</FoterNavLink>
          </FoterNavLI>
          <FoterNavLI>
            <FoterNavLink href="#">Contact</FoterNavLink>
          </FoterNavLI>
          <FoterNavLI>
            <FoterNavLink href="#">Sitemap</FoterNavLink>
          </FoterNavLI>
        </FooterNavUL>
      </FooterNavContainer>
    )
  }
}

const FooterNavContainer = styled('div')`
  grid-area: left;
  justify-self: start;
`

const FooterNavUL = styled('ul')`
  list-style: none;
`

const FoterNavLI = styled('li')`
  text-decoration: none;
  margin-top: 10px;
  color: ${colors.white};
`

const FoterNavLink = styled('a')`
  text-decoration: none;
  color: ${colors.white};
  :hover {
    color: ${colors.lila};
    text-decoration: underline;
  }
`
