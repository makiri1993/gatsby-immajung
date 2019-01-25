import React, { Component, FormEvent } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { Global, css } from '@emotion/core'
import { Color, Space } from '../definitions'
import styled from '@emotion/styled'
import addToMailchimp from 'gatsby-plugin-mailchimp'
const Logo = require('../images/slice1.svg')

interface Props {}
interface State {
  email: string
  resultMessage: string | null
}
export default class IndexPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      email: '',
      resultMessage: null,
    }
  }

  private handleSubmit = async (event: any) => {
    event.preventDefault()
    const { email } = this.state
    const result = await addToMailchimp(email)
    this.setState({ resultMessage: result.msg })
  }

  private handleChange = (event: any) => {
    const value: string = event.target.value
    this.setState({ email: value })
  }

  private get renderHelmet() {
    return (
      <>
        <Helmet>
          <meta charSet='UTF-8' />
          <title>immajung - coming soon!</title>
        </Helmet>
        <Global
          styles={css`
            @font-face {
              font-family: 'Poppins';
              font-style: normal;
              font-weight: 400;
              src: url('../../public/static/Poppins/Poppins-Regular.ttf')
                format('truetype');
            }
            * {
              margin: 0;
              font-size: 4vh;
              font-family: 'Poppins', Fallback, sans-serif;
            }
            body {
              background-color: ${Color.background};
            }
          `}
        />
      </>
    )
  }

  render() {
    const { email, resultMessage } = this.state
    return (
      <>
        {this.renderHelmet}
        <Container>
          <LogoImage src={Logo} />
          {resultMessage !== null ? (
            <ResultText>{resultMessage}</ResultText>
          ) : (
            <form onSubmit={this.handleSubmit}>
              <input type='hidden' name='form-name' value='contact-immajung' />

              <FlexItem>
                <label>
                  <Input
                    type='email'
                    name='email'
                    placeholder='your email'
                    value={email}
                    onChange={this.handleChange}
                  />
                </label>
              </FlexItem>
              <Button type='submit'>Send</Button>
            </form>
          )}
          <StyledLink to='/privacy'>privacy policy</StyledLink>
        </Container>
      </>
    )
  }
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: 20vh;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledLink = styled(Link)`
  font-size: 20px;
  color: #7c0a02;
  text-decoration: none;
`

const LogoImage = styled.img`
  width: 60vw;
  margin-bottom: ${Space.medium};
  color: ${Color.font};
`

const FlexItem = styled.div`
  width: 100%;
  margin-bottom: ${Space.medium};
  padding-left: ${Space.small};
  padding-right: ${Space.small};
  border: none;
  border-radius: 4px;
`
const Input = styled.input`
  color: ${Color.font};
  background-color: rgb(255, 255, 255, 0.6);
  border: none;
  text-align: center;
`
const ResultText = styled.p`
  width: 50vw;
  line-height: 1.2;
  margin-bottom: ${Space.xlarge};
  color: ${Color.font};
`

const Button = styled.button`
  width: 100%;
  padding: ${Space.xsmall};
  margin-top: ${Space.medium};
  margin-bottom: ${Space.xlarge};
  color: ${Color.font};
  background-color: rgb(255, 255, 255, 0.4);
  border: none;
  border-radius: 3px;
`
