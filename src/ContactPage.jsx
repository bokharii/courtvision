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
    <div>
      {submitted ? (
        <p>Thank you for reaching out!</p>
      ) : (
        <>
          {error && (
            <p>Oops, something went wrong. Hopefully it isn't my fault!</p>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
            />
            <button type="submit">Send</button>
          </form>
        </>
      )}
    </div>
  );
}
