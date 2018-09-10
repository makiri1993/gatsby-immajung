import * as React from 'react'
import styled from 'react-emotion'
import { colors, margins } from '../../styles/variables'
import Link from 'gatsby-link'

interface SliderItemProps{
  title: string
  cat: string
  imgsrc: string
  imgalt: string
  imgtitle: string
  preText: string
  link: string
}

interface SliderItemState{}

export default class Slider extends React.Component<SliderItemProps, SliderItemState>{
  constructor(props: SliderItemProps) {
    super(props)
    this.state = { }
  }

  public render() {
    return(
		<div>
			<SliderItem>
				<Title>{this.props.title}</Title>
				<Cat>{this.props.cat}</Cat>
				<FeatureImgContainer>
					<FeaturedImg title="Featured image from the Blogpost" alt="Featured image from the Blogpost" src={this.props.imgsrc} />
				</FeatureImgContainer>
			</SliderItem>
			<PreTextContainer>
					{this.props.preText}
				<br/>
				<ReadMore title="Link to the Blogpost" to={this.props.link}>Read more..</ReadMore>
			</PreTextContainer>
		</div>
    )
  }
}

const SliderItem = styled('div')`
	margin-top: ${margins.large}px;
	color: white;
	width: 90%;
	max-height: 100vh;
`

const FeatureImgContainer = styled('div')`
	width: 100%;
	max-height: auto;
`

const FeaturedImg = styled('img')`
	max-height: 80vh;
	max-width: 80%;
	display: block;
   margin-left: auto;
	margin-right: auto;
`

const Title = styled('h1')`
	color: ${colors.black};
	background-color: ${colors.white};
	margin-top: -20px;
	display: block;
	width: 100%;
	text-align: center;
`
const Cat = styled('h2')`
	position: absolute;
	margin-top: 70%;
	color: ${colors.black};
	background-color: ${colors.white};
	display: block;
	width: auto;
	text-align: center;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const PreTextContainer = styled('div')`
	position: relative;
	font-size: 1.1rem;
	color: ${colors.black};
	width: 90%;
	@media (max-height: 570px) {
  	width: 90%;
  }
`

const ReadMore = styled(Link)`
	text-decoration: none;
	color: ${colors.lila};
`
