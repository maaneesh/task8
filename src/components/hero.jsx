import React from "react";
import CardGrid from "./cardgrid";
import ContactForm from "./form";
function Hero() {
  return (
    <section className="hero min-h-screen bg-red-400">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.alconlighting.com%2Fblog%2Fwp-content%2Fuploads%2F2018%2F03%2FRetailLightingHash-1024x769.jpg&f=1&nofb=1&ipt=a9c4de255bb83d7de799b73315dc8e0e727fc3ac0e07de232a46ed6b820fb75d&ipo=images"
          alt="Hero Illustration"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl text-zinc-200 font-bold">
            Welcome to Vastra
          </h1>
          <p className="py-6">
            "Our mission is to inspire and empower individuals through
            exceptional clothing that embodies quality, style, and ethical
            craftsmanship. We are committed to delivering timeless and
            innovative designs that blend comfort with sophistication, ensuring
            every piece reflects our dedication to sustainability and
            excellence. Through our products, we aim to enhance the lives of our
            customers, celebrate individuality, and set new standards in the
            fashion industry."
          </p>
          <button className="btn btn-primary">
            Shop the latest Collection
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
