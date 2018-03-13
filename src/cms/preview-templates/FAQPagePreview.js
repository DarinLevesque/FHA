import React from 'react'
import { FAQPageTemplate } from '../../templates/faq-page'

const FAQPagePreview = ({ entry, widgetFor }) => (
  <FAQPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
    faq={{
      question: entry.getIn(['data', 'question']),
      answer: entry.getIn(['data', 'answer']),
    }}
  />
)

export default FAQPagePreview
