import React from "react";

function Header() {
  return (
    <header class="navbar bg-base-100 shadow-lg p-4">
      <div class="flex-1">
        <a href="#" class="btn btn-ghost normal-case text-xl">
          <img src="logo.png" alt="Company Logo" class="h-10 w-auto" />
        </a>
      </div>
      <div class="flex-none hidden lg:flex">
        <nav class="menu menu-horizontal px-1">
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
