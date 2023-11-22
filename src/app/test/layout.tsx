

import React, { FC } from 'react';

type LayoutType = {
  children: React.ReactNode;
};

const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <div>
      <h1>Header</h1>
      {children} 
      <h1>Footer</h1>
    </div>
  );
};

export default Layout;