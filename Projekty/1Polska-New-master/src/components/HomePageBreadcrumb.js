import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/homePageBreadcrumb.scss";

const HomePageBreadcrumb = () => {
  return (
    <div class="homePageBreadcrumb">
      <NavLink to="/">&#8592; Powrót do strony głównej</NavLink>
    </div>
  );
};

export default HomePageBreadcrumb;
