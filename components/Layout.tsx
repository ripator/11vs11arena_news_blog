import React from 'react';
import { Header } from './';

const Layout = ({children}: {children: JSX.Element}) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout