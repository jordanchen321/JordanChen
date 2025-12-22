"use client";

import Navbar from "../components/Navbar"
import Intro from "../components/Intro";


export default function Home() {
  return (
    <>
      <div className="page-fade">
        <Navbar/>
        <Intro/>
      </div>
    </>
  );
}