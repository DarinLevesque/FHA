import React from "react";
import Link from "gatsby-link";
import Content, { HTMLContent } from "../components/Content";

export const PropServicesPageTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">
              Property Services<br />
              <small>Our Mission & Purpose</small>
            </h1>
            <nav className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="is-active">
                  <Link to="/property-services" aria-current="page">
                    PropServices
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <PropServicesPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

export const propservicesPageQuery = graphql`
  query PropServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
