import React from "react";
import Link from "gatsby-link";

import carousel1 from "../img/house-window-chair-verandah.jpg";
import carousel2 from "../img/brickbuilding.jpg";
import carousel3 from "../img/marine.jpg";
import Nova from "../img/nova-concealment-sqr.png";
import OVO from "../img/OVOLogo2LandscapeSmall.png";
import Patriot from "../img/PatriotLogo.png";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">What we do</h1>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child box">
                <p className="title">Fair Housing Act Details</p>
                <p>
                  The Fair Housing Act was enacted as Title VIII of the Civil
                  Rights Act of 1968. It protects people from discrimination
                  based on the protected classes established.
                </p>
              </div>
              <div className="tile is-child box">
                <p className="title">Webinar Schedule</p>
                <p>Content</p>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title">Three</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  semper diam at erat pulvinar, at pulvinar felis blandit.
                  Vestibulum volutpat tellus diam, consequat gravida libero
                  rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend,
                  nunc dui porta orci, quis semper odio felis ut quam.
                </p>
                <p>
                  Suspendisse varius ligula in molestie lacinia. Maecenas varius
                  eget ligula a sagittis. Pellentesque interdum, nisl nec
                  interdum maximus, augue diam porttitor lorem, et sollicitudin
                  felis neque sit amet erat. Maecenas imperdiet felis nisi,
                  fringilla luctus felis hendrerit sit amet. Aenean vitae
                  gravida diam, finibus dignissim turpis. Sed eget varius
                  ligula, at volutpat tortor.
                </p>
                <p>
                  Integer sollicitudin, tortor a mattis commodo, velit urna
                  rhoncus erat, vitae congue lectus dolor consequat libero.
                  Donec leo ligula, maximus et pellentesque sed, gravida a
                  metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet
                  lacus, quis faucibus libero. Quisque non semper leo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="is-divider" data-content="OUR AFFILIATES" />
        <div class="carousel is-5 carousel-animated carousel-animate-slide">
          <div class="carousel-container">
            <div class="carousel-item is-active">
              <figure class="image is-2by1">
                <img src={Nova} />
              </figure>
            </div>
            <div class="carousel-item">
              <figure class="image is-2by1">
                <img src={OVO} />
              </figure>
            </div>
            <div class="carousel-item">
              <figure class="image is-2by1">
                <img src={Patriot} />
              </figure>
            </div>
            <div class="carousel-item">
              <figure class="image is-2by1">
                <img src="#" />
              </figure>
            </div>
            <div class="carousel-item">
              <figure class="image is-2by1">
                <img src="#" />
              </figure>
            </div>
          </div>
          <div class="carousel-navigation is-centered">
            <div class="carousel-nav-left">
              <i class="fa fa-chevron-left" aria-hidden="true" />
            </div>
            <div class="carousel-nav-right">
              <i class="fa fa-chevron-right" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>
    );
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
`;
