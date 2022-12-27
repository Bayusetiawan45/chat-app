import React from 'react';

interface LayoutProps {
  children: JSX.Element
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <p>header</p>
      {children}
    </div>
  );
};

export default Layout;