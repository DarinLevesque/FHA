import React from 'react';
import Link from 'gatsby-link';
import { Grid, Row, Col } from 'react-bootstrap';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Index</h1>
          </div>
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={8}>
                <code>&lt;{'Col xs={12} md={8}'} /&gt;</code>
              </Col>
              <Col xs={6} md={4}>
                <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
              </Col>
            </Row>

            <Row className="show-grid">
              <Col xs={6} md={4}>
                <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
              </Col>
              <Col xs={6} md={4}>
                <code>&lt;{'Col xs={6} md={4}'} /&gt;</code>
              </Col>
              <Col xsHidden md={4}>
                <code>&lt;{'Col xsHidden md={4}'} /&gt;</code>
              </Col>
            </Row>

            <Row className="show-grid">
              <Col xs={6} xsOffset={6}>
                <code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code>
              </Col>
            </Row>

            <Row className="show-grid">
              <Col md={6} mdPush={6}>
                <code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code>
              </Col>
              <Col md={6} mdPull={6}>
                <code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code>
              </Col>
            </Row>
          </Grid>;
        </div>
      </section>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
