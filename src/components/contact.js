import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <article id="contact">
        <h2>Contact</h2>
        <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="textarea" placeholder="Message" />
        </form>

        <a href="#home" className="fas fa-chevron-up">{null}</a>
      </article>
    )
  }
}

export default Contact;