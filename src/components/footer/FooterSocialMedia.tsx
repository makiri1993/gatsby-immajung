import * as React from 'react'
import styled from 'react-emotion'
import { colors, margins } from '../../styles/variables'

interface IFooterSocialMediaProps {}

const instagram: string = require('../../img/socialmedia/instagram.svg') 

export default class FooterSocialMedia extends React.Component<IFooterSocialMediaProps> {
  constructor(props: IFooterSocialMediaProps) {
    super(props)
    this.state = {}
  }
  public render() {
    return(
      <FooterSocialMediaContainer>
        <FooterSocialMediaH3>Follow us on:</FooterSocialMediaH3>
        <br/>
        <a target="_blank" title="link to immajung instagram page" href="https://www.instagram.com/immajung.clo/"><FooterSocialMediaImg title="instagram logo" alt="instagram logo" src={instagram}/></a>
      </FooterSocialMediaContainer>
    )
  }
}

const FooterSocialMediaContainer = styled('div')`
  grid-area: right;
  text-align: center;
`

const FooterSocialMediaH3 = styled('h3')`
`

const FooterSocialMediaImg = styled('img')`
  width: 30px;
  height: auto;
`
