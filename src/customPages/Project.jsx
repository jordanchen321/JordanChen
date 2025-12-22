"use client";

import Navbar from "../components/Navbar"
import ProjectCarousel from "../components/ProjectCarousel"

export default function Project() {
  return (
    <>
      <div className="page-fade">
        <Navbar/>
        <ProjectCarousel />;
      </div>
    </>
  );
}