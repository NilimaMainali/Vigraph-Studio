import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="contact-page">
      <header className="header">
        <div className="logo">VIGRAPH STUDIO</div>
        <nav className="navbar">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Pages</a>
          <a href="#" className="active">
            Contact Us
          </a>
        </nav>
      </header>

      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>Home / Contact</p>

      </section>

      <section className="contact-section">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <h3>Get In Touch</h3>
          <form>
            <input type="text" placeholder="Your Name..." />
            <input type="email" placeholder="example@gmail.com" />
            <input type="text" placeholder="Title..." />
            <textarea placeholder="Type Here..."></textarea>
            <button type="submit">Send Now</button>
          </form>
        </div>

        <div className="contact-info">
          <p>
            In tempus nisl turpis, at ultricies dui eleifend a. Quisque et quam
            vel nunc consectetur pharetra euismod et elit.
          </p>
          <div className="info-item">
            <i className="icon">📞</i>
            <span>Phone Number</span>
            <p>+6282 4032 567</p>
          </div>
          <div className="info-item">
            <i className="icon">✉️</i>
            <span>Email Address</span>
            <p>Example@Email.Com</p>
          </div>
          <div className="info-item">
            <i className="icon">💬</i>
            <span>Whatsapp</span>
            <p>082-245-7253</p>
          </div>
          <div className="info-item">
            <i className="icon">📍</i>
            <span>Our Office</span>
            <p>2443 Oak Ridge Omaha, QA 45065</p>
          </div>
          <div className="map">
            <iframe
              title="location"
              
              width="300"
              height="200"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>We Are Always Ready To Take A Perfect Shot</h2>
        <button>Get Started</button>
      </section>

      <footer className="footer">
        <div className="footer-logo">VIGRAPH STUDIO</div>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Contact</a>
        </div>
        <div className="footer-info">
          <p>Copyright © 2023 VIGraph | Powered by VIGraph</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
