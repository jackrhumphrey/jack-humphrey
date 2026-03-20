"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    document.documentElement.style.setProperty("--xrot", String(position.x));
    document.documentElement.style.setProperty("--yrot", String(position.y));
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const x =
      -(event.nativeEvent.offsetX / event.currentTarget.offsetWidth) * 90 + 45;
    const y =
      -(event.nativeEvent.offsetY / event.currentTarget.offsetHeight) * 90 + 45;
    setPosition({ x, y });
  };

  return (
    <header>
      <h1 className="heading">
        <svg className="heading__svg" viewBox="0 0 500 500">
          <defs>
            <path
              id="circle"
              d="M 250,250 m -140,0 a 140,140 0 1 1 280,0  a 140,140 0 1 1 -280,0"
            />
          </defs>
          <text className="heading__text">
            <textPath href="#circle" textLength="840">
              Jack Humphrey
            </textPath>
          </text>
        </svg>
      </h1>
      <nav className="nav">
        <Link
          onMouseMove={handleMouseMove}
          className={`nav__link${pathName === "/" ? " nav__link--current" : ""}`}
          href="/"
          aria-current={pathName === "/" ? "page" : undefined}
        >
          About
        </Link>
        <Link
          onMouseMove={handleMouseMove}
          className={`nav__link${pathName === "/work" ? " nav__link--current" : ""}`}
          href="/work"
          aria-current={pathName === "/work" ? "page" : undefined}
        >
          Work
        </Link>
        <Link
          onMouseMove={handleMouseMove}
          className={`nav__link${pathName === "/contact" ? " nav__link--current" : ""}`}
          href="/contact"
          aria-current={pathName === "/contact" ? "page" : undefined}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
