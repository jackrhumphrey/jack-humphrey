"use client";

import Image from "next/image";
import "./work.css";

export default function Page() {
  return (
    <>
      <h2 className="visually-hidden">Work</h2>
      <article className="work__item">
        <a
          href="https://jackrhumphrey.github.io/colour/"
          className="work__image-link"
        >
          <Image
            className="work__image"
            src="/colour.png"
            alt="Screenshot of Colour Mixer"
            width={1200}
            height={872}
          />
        </a>
        <div className="work__description">
          <h3 className="work__header">
            <a href="https://jackrhumphrey.github.io/colour/">Colour Mixer</a>
          </h3>
          <p>Digital colour mixing tool, with a range of options. </p>
          <p>
            Implemented using the{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix">
              color-mix()
            </a>{" "}
            CSS function, allowing users to explore usage and use the resulting
            colours.
          </p>
        </div>
      </article>
    </>
  );
}
