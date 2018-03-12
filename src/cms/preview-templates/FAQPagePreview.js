import React from 'react'
import { FAQPageTemplate } from '../../templates/faq-page'

const FAQPagePreview = ({ entry, widgetFor }) => (
  <FAQPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

export default FAQPagePreview
