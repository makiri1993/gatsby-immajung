import * as React from 'react'
import styled from 'react-emotion'

interface CategoryProps {
  category: string
}

interface CategoryProps {}

export default class Category extends React.Component<
  CategoryProps,
  CategoryProps
> {
  constructor(props: CategoryProps) {
    super(props)
    this.state = {}
  }
  public render() {
    return (
      <CategoryContainer>
        <h2>{this.props.category}</h2>
      </CategoryContainer>
    )
  }
}

const CategoryContainer = styled('div')`
  position: absolute;
  font-size: 4rem;
  width: 250px;
  margin-top: -100px;
  margin-left: 350px;
`
