import React from 'react'
import Content, { HTMLContent } from '../components/Content'

export const TOSPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
      <div className="row">
        <div className="col-lg-12">
            <h1 className="page-header">Terms of Service<br />
                <small>Last updated: March 29, 2018</small>
            </h1>
            <ol className="breadcrumb">
                <li><a href="/">Home</a>
                </li>
                <li className="active">Terms of Service</li>
            </ol>
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
  )
}

export default ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <TOSPageTemplate
      contentComponent={HTMLContent}
      title={post.frontmatter.title}
      content={post.html}
    />
  )
}

export const TOSPageQuery = graphql`
  query TOSPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
