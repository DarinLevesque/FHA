import React from "react";
import { Panel, PanelGroup, Accordion } from "react-bootstrap";

export default ({ data }) => (
  <div className="columns">
    <PanelGroup accordion id="accordion-example">
      {data.map(faq => (
        <Panel eventKey={faq.id} key={faq.id}>
          <Panel.Heading>
            <Panel.Title toggle>{faq.question}</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>{faq.answer}</Panel.Body>
        </Panel>
      ))}
    </PanelGroup>
  </div>
);
