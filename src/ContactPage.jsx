import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    try {
      const res = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) setSubmitted(true);
      else setError(true);
    } catch (error) {
      console.error("Error sending form data:", error);
      setError(true);
    }
  };

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  };

  return (
    <div className="page">
      <h1 className="page-title">Contact Me!</h1>
      {submitted ? (
        <p className="status-message status-message--success">
          Thank you for reaching out!
        </p>
      ) : (
        <>
          {error && (
            <p className="status-message status-message--error">
              Oops, something went wrong. Hopefully it isn&apos;t my fault!
            </p>
          )}
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="form-input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <input
              className="form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <textarea
              className="form-textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
            />
            <button type="submit" className="btn">
              Send
            </button>
          </form>
        </>
      )}
    </div>
  );
}
