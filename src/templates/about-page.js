import React from "react";
import Link from "gatsby-link";
import Header from "../components/Header";
import Content, { HTMLContent } from "../components/Content";

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="is-active">
                  <Link to="/about" aria-current="page">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
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
    <AboutPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  );
};

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
