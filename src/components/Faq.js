import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
  } from 'react-accessible-accordion';
  
import 'react-accessible-accordion/dist/fancy-example.css';

export default ({ data }) => (
  <div className="columns">
  <Accordion>
    {data.map(faqs => (
        <AccordionItem>
            <AccordionItemTitle>
                <h3>{faq.question}</h3>
            </AccordionItemTitle>
            <AccordionItemBody>
                <p>{faq.answer}</p>
            </AccordionItemBody>
        </AccordionItem>
    ))}
    </Accordion>
  </div>
)