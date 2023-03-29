import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import Contact from "../../assets/images/contact.JPG";
import { Button, DatePicker, Space, version } from "antd";
import "antd/dist/reset.css";

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  return (
    <section className="contact">
      <div className="center">
        <h1 className="page-header">Reach Me</h1>
      </div>
      <div className="center">
        <img src={Contact} alt="contact-photo" className="photo" />
      </div>
      <div className="center w-100">
        <form className="contact-form form-group" onSubmit={handleSubmit}>
          <div>
            <label className="text-muted" htmlFor="name">
              Name:
            </label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-muted" htmlFor="email">
              Email address:
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-muted" htmlFor="message">
              Message:
            </label>
            <textarea
              className="form-control"
              name="message"
              rows="5"
              value={message}
              onChange={handleChange}
            />
          </div>
          {errorMessage && (
            <div>
              <p className="text-danger">{errorMessage}</p>
            </div>
          )}
          <button
            className="btn btn-primary"
            data-testid="button"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
