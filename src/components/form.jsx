import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container mx-auto p-8">
      <form
        className="form-control w-full max-w-lg mx-auto bg-base-100 p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          name="name"
          className="input input-bordered w-full mb-4"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />

        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          className="input input-bordered w-full mb-4"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />

        <label className="label">
          <span className="label-text">Message</span>
        </label>
        <textarea
          name="message"
          className="textarea textarea-bordered w-full mb-4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
