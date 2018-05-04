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

    (function() {
      var qs,
        js,
        q,
        s,
        d = document,
        gi = d.getElementById,
        ce = d.createElement,
        gt = d.getElementsByTagName,
        id = "typef_orm_share",
        b = "https://embed.typeform.com/";
      if (!gi.call(d, id)) {
        js = ce.call(d, "script");
        js.id = id;
        js.src = b + "embed.js";
        q = gt.call(d, "script")[0];
        q.parentNode.insertBefore(js, q);
      }
    })();

    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">What we do</h1>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child box">
                <p className="title">Get Qualified!</p>
                <p>
                  <a
                    className="typeform-share button is-link"
                    href="https://kdventures.typeform.com/to/sJm9ls"
                    data-mode="popup"
                    style={{
                      display: "inline-block",
                      textDecoration: "none",
                      backgroundColor: "#267DDD",
                      color: "white",
                      cursor: "pointer",
                      fontFamily: "Helvetica,Arial,sans-serif",
                      fontSize: 20,
                      lineHeight: 50,
                      textAlign: "center",
                      margin: 0,
                      height: 50,
                      padding: "0px 33px",
                      borderRadius: 1,
                      maxWidth: "100%",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontWeight: "bold",
                      WebkitFontSmoothing: "antialiased",
                      MozOsxFontSmoothing: "grayscale"
                    }}
                    target="_blank"
                  >
                    Qualify!
                  </a>
                </p>
              </div>
              <div className="tile is-child box">
                <p className="title">Webinar Schedule</p>
                <p>Coming soon...</p>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child box">
                <p className="title">Our background</p>
                <p style={{ marginTop: 10 }}>
                  The Fair Housing Act was enacted as Title VIII of the Civil
                  Rights Act of 1968. It protects people from discrimination
                  based on the classes established in the law.
                </p>
                <p style={{ marginTop: 10 }}>
                  Fair Housing Advocates Inc. are experts in the Fair Housing
                  Act claims process and education. We provide education seminars/webinars, property testing and other services which are all explained in our Property Pro section.
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
