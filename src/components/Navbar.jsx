"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <h2 className="logo">Jordan</h2>

      <ul className="nav-links">
        <li>
          <Link
            href="/"
            className={pathname === "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            href="/project"
            className={pathname === "/project" ? "nav-link active" : "nav-link"}
          >
            Project
          </Link>
        </li>

        <li>
          <Link
            href="/contact"
            className={pathname === "/contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
