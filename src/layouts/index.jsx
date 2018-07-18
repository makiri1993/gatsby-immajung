import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Styled from 'styled-components';


import Header from '../components/Header';
// import './all.sass';
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="immajung" />
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

