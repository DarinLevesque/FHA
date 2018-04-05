import React from 'react';
import Link from 'gatsby-link';
import { Grid, Row, Col, Carousel, CarouselItem, CarouselCaption, Image } from 'react-bootstrap';

import carousel1 from '../img/house-window-chair-verandah.jpg';
import carousel2 from '../img/brickbuilding.jpg';
import carousel3 from '../img/marine.jpg';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
      <Carousel>
        <Carousel.Item>
          <Image src={carousel1} responsive />
          <Carousel.Caption>
            <h3>Fair Housing Advocates, Inc.</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={carousel2} responsive />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={carousel3} responsive />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">What we do</h1>
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
