import * as React from "react";
import Footer from "../components/footer/Footer";
import Logo from "../components/logo/Logo";
import Navigation from "../components/navigation/Navigation";
import "../styles/reset.css";

const TemplateWrapper: React.SFC = ({ children = this.children }) => (
  <div>
    <Logo />
    <Navigation />
    <Footer />
    <React.Fragment>{children()}</React.Fragment>
  </div>
);
export default TemplateWrapper;
