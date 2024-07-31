import React from "react";
import CardGrid from "./cardgrid";
import ContactForm from "./form";
function Hero() {
  return (
    <section className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="path/to/your-image.jpg"
          alt="Hero Illustration"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Hi, I'm [Your Name]</h1>
          <p className="py-6">
            I'm a [Your Profession] with a passion for [Your Passion or Niche].
            Welcome to my portfolio! Here, you'll find examples of my work and
            projects that I've been a part of.
          </p>
          <button className="btn btn-primary">View My Work</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
