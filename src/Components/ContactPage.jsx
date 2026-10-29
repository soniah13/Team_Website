import React, { useState } from 'react'

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        <p>Have a question? Send us a message.</p>

        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          placeholder="Enter the subject"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          rows="5"
          placeholder="Write your message..."
          required
        />

        <button type="submit">Send Message</button>

        {submitted && (
          <p className="success-message">
            Thank you! Your message has been submitted.
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactPage