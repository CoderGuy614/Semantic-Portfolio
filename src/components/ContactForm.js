import React from "react";
import { Form, Button, TextArea, Icon } from "semantic-ui-react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <Form
        inverted
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xzbkzwrk"
        method="POST"
      >
        <Form.Field>
          <label>Your Email Address:</label>
          <input type="email" name="email" placeholder="JaneDoe@Gmail.com" />
        </Form.Field>
        <Form.Field>
          <label>Message:</label>
          <TextArea
            rows={3}
            name="message"
            placeholder="Enter your Message Here..."
          />
        </Form.Field>

        {status === "SUCCESS" ? (
          <>
            <Icon name="check circle" color="green" size="large" />
            <p>
              Thanks! Your message was recieved and I'll get back to you ASAP!
            </p>
          </>
        ) : (
          <Button primary type="submit">
            <Icon name="send" />
            Send
          </Button>
        )}
        {status === "ERROR" && (
          <>
            <Icon name="frown" color="red" size="large" />
            <p>Ooops! Something went Wrong, Please try Again!</p>
          </>
        )}
      </Form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
