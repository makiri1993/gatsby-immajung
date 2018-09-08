import Link from 'gatsby-link'
import * as React from 'react'
import styled from 'react-emotion'
import { colors, margins } from '../../styles/variables'

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
				<Cat>{this.props.cat}</Cat>
				<FeatureImgContainer>
					<FeaturedImg title="Featured image from the Blogpost" alt="Featured image from the Blogpost" src={this.props.imgsrc} />
				</FeatureImgContainer>
			<PreTextContainer>
					{this.props.preText}
				<br/>
				<ReadMore title="Link to the Blogpost" to={this.props.link}>Read more..</ReadMore>
			</PreTextContainer>
      </BlogPostItemContainer>
    )
  }
}

const BlogPostItemContainer = styled('div')`
  margin-top: ${margins.medium + 20}px;
  width: 400px;
	height: auto;
`
const FeatureImgContainer = styled('div')`
	width: 100%;
	min-height: 300px;
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
	margin-top: -70px;
	width: 300px;
	display: block;
`
const Cat = styled('h2')`
	position: absolute;
	color: ${colors.black};
	background-color: ${colors.white};
	display: block;
	margin-top: 100px;
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