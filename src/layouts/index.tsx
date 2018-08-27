import * as React from 'react';
import Logo from '../components/Logo/Logo';
import '../styles/reset.css';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';

const TemplateWrapper: React.SFC = ({ children = this.children }) => (
  <div>
    <Logo />
    <Navigation />
    <Footer />
    <div>{children()}</div>
  </div>
);
export default TemplateWrapper;

