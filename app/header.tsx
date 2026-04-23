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

  useEffect(() => {
    const media = window.matchMedia("(width > 860px)");

    if (media.matches) {
      window.scrollTo(0, 0);
    }
  }, [pathName]);

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const x =
      -(event.nativeEvent.offsetX / event.currentTarget.offsetWidth) * 90 + 45;
    const y =
      -(event.nativeEvent.offsetY / event.currentTarget.offsetHeight) * 90 + 45;
    setPosition({ x, y });
  };

  return (
    <header className="header">
      <div className="header__sticky">
        <h1 className="header__heading">
          <span className="visually-hidden">Jack Humphrey</span>
          <svg className="header__heading-svg" viewBox="0 0 500 500">
            <defs>
              <path
                id="circle"
                d="M 250,250 m -140,0 a 140,140 0 1 1 280,0  a 140,140 0 1 1 -280,0"
              />
            </defs>
            <text className="header__heading-text">
              <textPath href="#circle" textLength="840">
                Jack Humphrey
              </textPath>
            </text>
          </svg>
        </h1>
        <nav className="header__nav">
          <Link
            onMouseMove={handleMouseMove}
            className={`header__nav-link${pathName === "/" ? " header__nav-link--current" : ""}`}
            href="/"
            aria-current={pathName === "/" ? "page" : undefined}
          >
            About
          </Link>
          <Link
            onMouseMove={handleMouseMove}
            className={`header__nav-link${pathName === "/work" ? " header__nav-link--current" : ""}`}
            href="/work"
            aria-current={pathName === "/work" ? "page" : undefined}
          >
            Work
          </Link>
          <Link
            onMouseMove={handleMouseMove}
            className={`header__nav-link${pathName === "/contact" ? " header__nav-link--current" : ""}`}
            href="/contact"
            aria-current={pathName === "/contact" ? "page" : undefined}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
