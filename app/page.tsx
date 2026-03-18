import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1 className="header">
          <svg viewBox="0 0 500 500">
            <defs>
              <path
                id="circle"
                d="
                M 250,250
                m -125,0
                a 125,125 0 0 1 250,0 
                a 125,125 0 0 1 -250,0
                "
              />
            </defs>

            <text textAnchor="start" className="header__text">
              <textPath href="#circle">Jack Humphrey</textPath>
            </text>
          </svg>
        </h1>
        <nav className="nav">
          <Link className="nav__link" href="/">
            About
          </Link>
          <Link className="nav__link" href="/work">
            Work
          </Link>
          <Link className="nav__link" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <main>Descripton</main>
    </div>
  );
}
