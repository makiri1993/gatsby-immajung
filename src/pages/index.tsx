import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from "gatsby"
import { Global, css } from '@emotion/core'
import { Color, Space } from '../definitions'
import styled from '@emotion/styled'

const Logo = require('../images/slice1.svg')
export default class IndexPage extends Component {
  render() {
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
        <Container>
          <LogoImage src={Logo} />

          <form
            name='contact-immajung'
            method='post'
            data-netlify='true'
            data-netlify-honeypot='bot-field'
          >
            <input type='hidden' name='form-name' value='contact-immajung' />
            <FlexItem>
              <label>
                <Input type='text' name='name' placeholder='your name' />
              </label>
            </FlexItem>
            <FlexItem>
              <label>
                <Input type='email' name='email' placeholder='your email' />
              </label>
            </FlexItem>
            <Button type='submit'>Send</Button>
          </form>
          <StyledLink to="/privacy">privacy policy</StyledLink>
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
  color: #7C0A02;
  text-decoration: none;
`


const LogoImage = styled.img`
  width: 60vw;
  margin-bottom: ${Space.medium};
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
  text-align: center;
`
const Textarea = styled.textarea`
  width: 25vw;
  margin-bottom: ${Space.xlarge};
  color: ${Color.font};
`

const Button = styled.button`
  width: 100%;
  padding: ${Space.xsmall};
  margin-top: ${Space.medium};
  margin-bottom: ${Space.xlarge};
  color: ${Color.font};
  border: none;
  border-radius: 3px;
`
