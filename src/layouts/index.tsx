import * as React from 'react';

const TemplateWrapper: React.SFC = ({ children = this.children }) => (
  <div>
    <div>{children()}</div>
  </div>
);
export default TemplateWrapper;

