import React from "react";
import Link from "gatsby-link";
import {
  Grid,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselCaption,
  Image
} from "react-bootstrap";

import carousel1 from "../img/house-window-chair-verandah.jpg";
import carousel2 from "../img/brickbuilding.jpg";
import carousel3 from "../img/marine.jpg";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

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
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">What we do</h1>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <div className="tile is-child box">
                <p className="title">One</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ornare magna eros, eu pellentesque tortor vestibulum ut.
                  Maecenas non massa sem. Etiam finibus odio quis feugiat
                  facilisis.
                </p>
              </div>
              <div className="tile is-child box">
                <p className="title">Webinar Schedule</p>
                <div class="calendar">
                  <div class="calendar-nav">
                    <div class="calendar-nav-previous-month">
                      <button class="button is-text">
                        <i class="fa fa-chevron-left" />
                      </button>
                    </div>
                    <div>March 2017</div>
                    <div class="calendar-nav-next-month">
                      <button class="button is-text">
                        <i class="fa fa-chevron-right" />
                      </button>
                    </div>
                  </div>
                  <div class="calendar-container">
                    <div class="calendar-header">
                      <div class="calendar-date">Sun</div>
                      <div class="calendar-date">Mon</div>
                      <div class="calendar-date">Tue</div>
                      <div class="calendar-date">Wed</div>
                      <div class="calendar-date">Thu</div>
                      <div class="calendar-date">Fri</div>
                      <div class="calendar-date">Sat</div>
                    </div>
                    <div class="calendar-body">
                      <div class="calendar-date is-disabled">
                        <button class="date-item">26</button>
                      </div>
                      <div class="calendar-date is-disabled">
                        <button class="date-item">27</button>
                      </div>
                      <div class="calendar-date is-disabled">
                        <button class="date-item">28</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">1</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">2</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">3</button>
                      </div>
                      <div class="calendar-date tooltip" data-tooltip="Today">
                        <button class="date-item is-today">4</button>
                      </div>
                      <div
                        class="calendar-date tooltip"
                        data-tooltip="Not available"
                        disabled=""
                      >
                        <button class="date-item">5</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">6</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">7</button>
                      </div>
                      <div
                        class="calendar-date tooltip"
                        data-tooltip="You have appointments"
                      >
                        <button class="date-item">8</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">9</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">10</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">11</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">12</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">13</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">14</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">15</button>
                      </div>
                      <div class="calendar-date calendar-range calendar-range-start">
                        <button class="date-item is-active">16</button>
                      </div>
                      <div class="calendar-date calendar-range">
                        <button class="date-item">17</button>
                      </div>
                      <div class="calendar-date calendar-range">
                        <button class="date-item">18</button>
                      </div>
                      <div class="calendar-date calendar-range">
                        <button class="date-item">19</button>
                      </div>
                      <div class="calendar-date calendar-range calendar-range-end">
                        <button class="date-item is-active">20</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">21</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">22</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">23</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">24</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">25</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">26</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">27</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">28</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">29</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">30</button>
                      </div>
                      <div class="calendar-date">
                        <button class="date-item">31</button>
                      </div>
                      <div class="calendar-date is-disabled">
                        <button class="date-item">1</button>
                      </div>
                    </div>
                  </div>
                </div>
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
