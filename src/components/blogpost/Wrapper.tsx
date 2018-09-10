import * as React from 'react'
import styled from 'react-emotion'
import { colors, margins } from '../../styles/variables'
import SocialmediaBar from '../callToActionComponents/socialmediabar/SocialmediaBar';

interface WrapperProps {
  blogpostcontent: string
}

export default class Wrapper extends React.Component<WrapperProps> {
  constructor(props: WrapperProps) {
    super(props)
    this.state = { }
  }

  public const createMarkup() {
    return { __html: this.props.blogpostcontent }
  }

  public render() {
    return(
			<MainContainer>
				<SocialmediaBar />
				<WrapperContainer dangerouslySetInnerHTML={this.createMarkup()} />
			</MainContainer>
    )
  }
}

const MainContainer = styled('div')`
	overflow: hidden;
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

const WrapperContainer = styled('div')`
	width: 100%;
	color: ${colors.black};

	img {
		display: block;
    margin-left: auto;
    margin-right: auto;
	}

	ol, ul {
		margin-left: 40px;
	}

	p {
  margin-bottom: 30px; /* between paragraphs */
  }

	pre {
		background-color: ${colors.black};
		color: ${colors.white};
		font-family: monospaced;
	}

	h1 {
		text-align: center;
	}
		@media (max-width: 600px) {
			img {
				width: 100%;
				height: auto;
			}
		}
`
