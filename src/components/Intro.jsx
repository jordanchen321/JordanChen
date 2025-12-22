"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function Intro() {
  const words = ["Programmer", "Analyst", "Researcher"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 150;
  const pauseDuration = 700; 

  // Typing Effect 
  useEffect(() => {
    let timeout;
    const currentWord = words[currentWordIndex];

    if (!isDeleting && displayedText.length < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentWord.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, words]);

  return (
    <div className="intro-section">
      <div>
        <Image className="profile"
          alt = ""
          src="/profile.jpg"
          width={300}
          height={450}
          priority
        />
      </div>

      <div className="intro">
        <div className="intro-words">
          <h1 className="intro-h1">
            Hi, it's <span className="blue-text">Jordan</span>
          </h1>

          <h2 className="intro-h2">
            I'm a{" "}
            <span className="blue-text">
              {displayedText}
              <span className="cursor">|</span>
            </span>
          </h2>

          <p className="intro-content">
            I’m a UCSD student majoring in Math Computer Science, with minors in
            Data Science and Cognitive Science. This site showcases my projects
            and explorations in computing, data analysis, and cognitive
            modeling, reflecting my passion for turning complex ideas into
            practical solutions.
          </p>
        </div>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={22} />
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={22} />
          </a>
        </div>

        <Link href="/contact" className="hire-me-btn">
          <span className="btn-fill"></span>
          <span className="btn-text">Contact Me!</span>
        </Link>
      </div>
    </div>
  );
}
