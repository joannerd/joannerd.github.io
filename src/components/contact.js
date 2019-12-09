import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <article id="contact">
        <h2>Contact</h2>
        <form>
            <div>
              <input className="form-input" type="text" placeholder="Name" />
              <input className="form-input"type="email" placeholder="Email" />
            </div>
            <textarea className="form-input" placeholder="Message" />
            <input className="button form" type="submit" value="SUBMIT" />
        </form>

        <a href="#home" className="fas fa-chevron-up">{null}</a>
      </article>
    )
  }
}

export default Contact;