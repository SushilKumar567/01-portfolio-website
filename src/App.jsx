import React from "react";

import Header from "./components/01-Header";
import Cover from "./components/02-Cover";
import Skills from "./components/03-00-Skills";
import Projects from "./components/04-00-Projects";
import About from "./components/05-About";
import Contact from "./components/06-Contact";
import Footer from "./components/07-Footer";

function App() {
  return (
    <div className="font-sans text-c3 bg-c2">
      <Header />
      <main className="m-10">
        <Cover />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
