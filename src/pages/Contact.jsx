import React from "react";

export const Contact = () => {
  const handelFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries())
    console.log(formInputData);
    
  };
  return (
    <section className="section-contact">
      <h2 className="container-title"></h2>
      <div className="contact-wrapper container">
        <form action={handelFormSubmit}>
          <input
            type="text"
            required
            autoComplete="false"
            placeholder="Enter your name.."
            name="username"
            className="form-control"
          />
          <input
            type="email"
            required
            autoComplete="false"
            placeholder="Enter your email.."
            name="email"
            className="form-control"
          />
          <textarea
            className="form-control"
            rows="10"
            autoComplete="false"
            placeholder="Enter your message.."
            name="message"
            required
          />
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
