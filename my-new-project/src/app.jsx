import React from "react";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header style={{
        backgroundColor: "#007bff",
        color: "white",
        padding: "15px 30px",
        position: "fixed",
        width: "100%",
        top: 0,
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
      }}>
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>My WebPage</h1>
          <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
            <li><a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a></li>
            <li><a href="#contact" style={{ color: "white", textDecoration: "none" }}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f9fa",
        paddingTop: "80px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "48px", marginBottom: "20px" }}>Welcome to My WebPage</h2>
        <p style={{ fontSize: "20px", color: "#555", maxWidth: "600px" }}>
          This is a simple React web page built with JavaScript. You can add more sections and interactivity!
        </p>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: "80px 20px", backgroundColor: "#ffffff" }}>
        <h2 style={{ textAlign: "center", fontSize: "36px", marginBottom: "20px" }}>About Me</h2>
        <p style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", color: "#555" }}>
          I am a web developer passionate about building beautiful and functional web applications using React and JavaScript.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: "80px 20px", backgroundColor: "#f1f1f1", textAlign: "center" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>Contact</h2>
        <p style={{ fontSize: "18px", color: "#555" }}>You can reach me via email:</p>
        <a href="mailto:example@email.com" style={{
          display: "inline-block",
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          borderRadius: "5px",
          textDecoration: "none"
        }}>Email Me</a>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#333",
        color: "white"
      }}>
        &copy; {new Date().getFullYear()} My WebPage. All rights reserved.
      </footer>
    </div>
  );
}
