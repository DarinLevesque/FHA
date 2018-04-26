import React from "react";
import "../../node_modules/bulma-accordion/dist/bulma-accordion.min.js";

export default ({ data }) => (
  <div className="columns">
    <section className="accordions">
      {data.map(faq => (
        <article className="accordion">
          <div className="accordion-header toggle">
            <p>{faq.question}</p>
          </div>
          <div className="accordion-body">
            <div className="accordion-content">{faq.answer}</div>
          </div>
        </article>
      ))}
    </section>
  </div>
);
