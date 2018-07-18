import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Footer from '../components/footer/footer'
import Header from '../components/Header';
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="immajung" />
    <Header />
    <div>{children()}</div>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

