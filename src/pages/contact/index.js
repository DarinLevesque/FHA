import React from "react";

import "./contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <section className="section section--gradient">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                    Contact Us
                  </h2>
                  <div className="content">
                    <form
                      name="contact"
                      method="post"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <p className="control has-icons-left">
                        <input
                          className="input is-rounded"
                          type="text"
                          placeholder="Full Name"
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-user" />
                        </span>
                      </p>
                      <p className="control has-icons-left">
                        <input
                          className="input is-rounded"
                          type="email"
                          placeholder="Email"
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-envelope" />
                        </span>
                      </p>
                      <p>
                        <label>
                          Message:
                          <textarea
                            className="textarea is-rounded"
                            name="message"
                          />
                        </label>
                      </p>
                      <p>
                        <button className="button is-link" type="submit">
                          Send
                        </button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
