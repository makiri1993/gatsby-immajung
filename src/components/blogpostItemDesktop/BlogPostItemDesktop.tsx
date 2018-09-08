import * as React from 'react'
import styled from 'react-emotion'
import { colors, margins } from '../../styles/variables'
import Link from 'gatsby-link'

interface IBlogPostItemProps {
  title: string
  cat: string
  imgsrc: string
  imgalt: string
  imgtitle: string
  preText: string
  link: string
}

const img: string = require('../../img/test_bild.jpg') 

export default class Slider extends React.Component<IBlogPostItemProps> {
  constructor(props: IBlogPostItemProps) {
    super(props)
    this.state = { }
  }

  public render() {
    return(
      <BlogPostItemContainer>
				<Title>{this.props.title}</Title>
				<Cat>Tech</Cat>
				<FeatureImgContainer>
					<FeaturedImg src={img} />
				</FeatureImgContainer>
			<PreTextContainer>
					{this.props.preText}
				<br/>
				<ReadMore to={this.props.link}>Read more..</ReadMore>
      </PreTextContainer>
      </BlogPostItemContainer>
    )
  }
}

const BlogPostItemContainer = styled('div')`
  margin-top: ${margins.small}px;
  width: 400px;
  height: auto;
`
const FeatureImgContainer = styled('div')`
	width: 100%;
	max-height: auto;
`

const FeaturedImg = styled('img')`
	max-height: 80vh;
	max-width: 80%;
`

const Title = styled('h1')`
	position: absolute;
	color: ${colors.black};
	background-color: ${colors.white};
  margin-top: -20px;
  margin-left: 130px;
	display: block;
	width: 200px;
`
const Cat = styled('h2')`
	position: absolute;
	color: ${colors.black};
	background-color: ${colors.white};
	margin-top: 300px;
	margin-left: -20px;
	display: block;
	width: 100px;
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