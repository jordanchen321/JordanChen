"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function ProjectCarousel() {
  const carouselRef = useRef(null);
  const wheelListenerRef = useRef(null);

  const projects = [
    { 
      title: "CrunchyRoll Award Data Analysis", 
      year: "2025", 
      description:
        "This project focused on collecting, cleaning, and analyzing multi-source anime data to study how factors such as view counts, genre, and pre-adaptation manga sales influence award outcomes. A predictive model with supporting visualizations was built to clearly present patterns and insights.", 
      image: "/projectImage/test.jpg",
      github: "https://github.com/jordanchen321/CrunchyRoll-Award-Factor-Analysis.git"
    },
    { 
      title: "Term Deposit Subscription Predictor", 
      year: "2025", 
      description:
        "This project used over 45,000 data points from the UCI Machine Learning Repository to train a machine learning model that predicts whether a customer will subscribe to a term deposit. The model achieved 91% accuracy by leveraging demographic and financial features with tools such as Scikit-learn, Pandas, and NumPy.", 
      image: "/projectImage/test.jpg",
      github: "https://github.com/jordanchen321/Term_Deposit_Predictor.git"
    },
    { title: "Pending...", year: "2025", description: "TBD", image: "/projectImage/test.jpg" },
    { title: "Pending...", year: "2025", description: "TBD", image: "/projectImage/test.jpg" },
    { title: "Pending...", year: "2025", description: "TBD", image: "/projectImage/test.jpg" }
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        const scrollSpeed = 4.5;
        carousel.scrollLeft += e.deltaY * scrollSpeed;
      }
    };

    const handleResize = () => {
      const isDesktop = window.innerWidth > 640;

      // Remove existing listener first
      if (wheelListenerRef.current) {
        carousel.removeEventListener("wheel", wheelListenerRef.current);
        wheelListenerRef.current = null;
      }

      // Add listener only on desktop
      if (isDesktop) {
        carousel.addEventListener("wheel", handleWheel, { passive: false });
        wheelListenerRef.current = handleWheel;
      }
    };

    handleResize();

    // Listen to window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (wheelListenerRef.current) {
        carousel.removeEventListener("wheel", wheelListenerRef.current);
      }
    };
  }, []);

  return (
    <section className="carousel-section">
      <div ref={carouselRef} className="carousel">
        <div className="carousel-track">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="card">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  draggable={false}
                  priority
                />

                <div className="card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className="card-year">
                  <h3>{project.year}</h3>
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-icon"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
