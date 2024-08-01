import React from "react";

function Header() {
  return (
    <header class="navbar bg-cyan-600 shadow-lg p-4">
      <div class="flex-1">
        <a href="#" class="btn btn-ghost normal-case text-xl">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._kk4sUOqccwfoMI1zPkW-gHaHa%26pid%3DApi&f=1&ipt=6ad28057b34ab58f32abbf5fb6c842215cf608712c97d025909e78969e08961d&ipo=images"
            alt="Company Logo"
            class="h-10 w-auto"
          />
        </a>
      </div>
      <div class="flex-none hidden lg:flex">
        <nav class="menu text-stone-50 menu-horizontal px-1">
          <a href="#home" class="btn btn-ghost">
            Home
          </a>
          <a href="#about" class="btn btn-ghost">
            About
          </a>
          <a href="#services" class="btn btn-ghost">
            Services
          </a>
          <a href="#contact" class="btn btn-ghost">
            Contact
          </a>
        </nav>
      </div>
      <div class="flex-none">
        <a href="#signup" class="btn btn-primary">
          Sign Up
        </a>
      </div>
    </header>
  );
}

export default Header;
