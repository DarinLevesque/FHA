import React from "react";
import { PageHeader, Glyphicon } from "react-bootstrap";
import Link, { navigateTo } from "gatsby-link";

const styles = {
  PageHeader: {
    PaddingLeft: "108px"
  }
};
const Header = () => (
  <PageHeader styles={styles}>
    Fair Housing Advocates, Inc. <small>Experts in compliance</small>
  </PageHeader>
);

export default Header;
