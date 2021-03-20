import React from "react";
import About from "../About/index";
import Footer from '../Footer/index';
import HeaderNav from '../../components/Header/index';
import Introduction from '../Introduction/index';
/** Import BrowseRouter */

const AppRoutes = (props) => {
  return (
    <>
      <HeaderNav/>
      <About {...props} />
      <Introduction {...props}/>
      <Footer {...props} />
    </>
  );
};

export default AppRoutes;
