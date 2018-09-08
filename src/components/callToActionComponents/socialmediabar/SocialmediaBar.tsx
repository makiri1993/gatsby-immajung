import { OutboundLink } from 'gatsby-plugin-google-analytics'
import * as React from 'react'
import styled from 'react-emotion'

interface ISocialmediaBarProps {}

const instagram: string = require('../../../img/socialmedia/instagram_black.svg')

export default class SocialmediaBar extends React.Component <ISocialmediaBarProps> {
  constructor(props: ISocialmediaBarProps) {
    super(props)
    this.state = {}
  }

  public render() {
    return(
      <SocialmediaBarContainer>
        <OutboundLink target="_blank" title="link to immajung instagram page" href="https://www.instagram.com/immajung.clo/"><SocialMediaImg title="instagram logo" alt="instagram logo" src={instagram}/></OutboundLink>
      </SocialmediaBarContainer>
    )
  }
}

const SocialmediaBarContainer = styled('div')`
  display: block;
  width: 50px;
  height: 50px;
  position: fixed;
  z-index: 1000;
  right: 0;
  top: 120px;
`

const SocialMediaImg = styled('img')`
  width: 50px;
  height: auto;
`
