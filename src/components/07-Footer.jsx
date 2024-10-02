import React from "react";

const Footer = () => {
  return (
    <footer className="bg-c6 text-3 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Made with
          <span className="text-c4"> &hearts;</span> by Sushil. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
