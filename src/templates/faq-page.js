import React from 'react';

import Faq from '../components/Faq';

export const FAQPageTemplate = ({ 
  title,
  faq,
 }) => (
    <section className="section section--gradient">
      <div className="container">
      <div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">{title}<br />
                <small>Frequently Asked Questions</small>
            </h1>
            <ol class="breadcrumb">
                <li><a href="/">Home</a>
                </li>
                <li class="active">About</li>
            </ol>
        </div>
      </div>
        <div class="row">
          <div class="col-lg-12">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <h2 className="has-text-weight-semibold is-size-2">
                {faq.heading}
              </h2>
              <p className="is-size-5">{faq.description}</p>
              <Faq data={faq.faqs} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <FAQPageTemplate
      title={frontmatter.title}
      faq={frontmatter.faq}
    />
  )
}

export const FAQPageQuery = graphql`
  query FAQPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        faq {
          heading
          description
          faqs {
            question
            answer
          }
        }
      }
    }
  }
`