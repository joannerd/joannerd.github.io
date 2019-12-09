import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <article id="contact">
        <form>
          <label>Message
            <input type="textarea" />
          </label>
          <label>Name
            <input type="text" />
          </label>
          <label>Email
            <input type="email" />
          </label>
        </form>
      </article>
    )
  }
}

export default Contact;