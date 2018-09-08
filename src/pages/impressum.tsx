import * as React from 'react'
import styled from 'react-emotion'
import Helmet from 'react-helmet'
import { margins } from '../styles/variables'

interface IImpressumProps {}

export default class Datenschutz extends React.Component<IImpressumProps> {
  constructor(props: IImpressumProps) {
    super(props)
    this.state = {}
  }

  public render() {
    return(
      <MainContainer>
          <Helmet>
          <meta charSet="utf-8" />
          <title>Impressum | immajung - when streetwear meets it</title>
          <link rel="canonical" href="https://www.immajung.com" />
          <meta name="description" content="immajung  streetwear brand from germany."></meta>
        </Helmet>
        <h1>Impressum</h1>
        <br />
        <p>
          Immajung was founded by Martin Kiriew, Ilias Zales, Dennis Piotrowski and Karim Ould Mahieddine in 2018.
          <br/>
          The brand intends to merge mordern streetwear and computer science concepts.
          <br/>
          <br/>
          Angaben gemäß § 5 TMG:
          <br/>
          <br/>
          Karim Ould Mahieddine - Am Kalkbruche 1b in 30455 Hannover
          <br/>
          <br/>
          Kontakt: Karim_om@me.com
        </p>
      </MainContainer>
    )
  }
}

const MainContainer = styled('div')`
	margin-left: 20px;
	margin-right: 20px;
	margin-top: 20px;
	min-height: 60vh;
	@media (min-width: 600px) {
		margin-left: 200px;
		margin-right: 200px;
		margin-top: 20px;
		}
		@media (min-width: 1600px) {
		margin-left: 400px;
		margin-right: 400px;
		margin-top: 20px;
		}
`
