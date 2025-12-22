"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function TiltContact() {
  const cardRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs.sendForm(
        "service_6l0oe4m",   // replace with EmailJS Service ID
        "template_mc0y58x",  // replace with EmailJS Template ID
        form,
        "7_dOjZKZPGho8yXTn"    // replace with EmailJS Public Key
      )
      .then(
        () => {
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 3000);
          form.reset();
        },
        (error) => {
          console.error("Email send error:", error);
          alert("Error sending message");
        }
      );
  };

  return (
    <div className="info">
      <div className="contact-container">
        <h2>Inquiry</h2>

        <div className="contact-links">
          <p>
            Email: <a href="mailto:jordanchen321@gmail.com">Jordanchen321@gmail.com</a>
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="Name" placeholder="Name" required />
          <input type="title" name="Title" placeholder="Title" required />
          <input type="email" name="Email" placeholder="Email" required />
          <textarea name="Message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {submitted && <div className="submit-popup">Submitted!</div>}
      </div>

      <div className="tilt-wrapper">
        <div
          ref={cardRef}
          className="tilt-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <a href="https://drive.google.com/file/d/1Kt1S0p7U7tvs3ohvikPvTPWTRB9oAsyr/view?usp=sharing">
            <Image className = "resume"
              src="/JordanChen/resume.png"
              alt="Tilt image"
              width={300}
              height={450}
              priority
            />
          </a>
        </div>
      </div>
    </div>
  );
}

