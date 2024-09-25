import React from "react";
import {Hero} from "../src/components/Home/Hero";
import {AboutSection} from "../src/components/Home/About";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <article>
        <div className="container">          
          <Hero />
          <AboutSection />
          <div className="pagination">
            <div className="page-navigation">
              <div className="page-item disabled">
                <a className="btn page-link disabled" tabIndex={-1}>
                  <span className="page-previous-icon" aria-hidden="true"></span>
                  <span className="page-next-text">Inicio</span>
                </a>
              </div>
              <div className="page-item">
                <Link className="btn page-link" href="/editor">
                  <span className="page-next-text">Editor</span>
                  <span className="page-next-icon" aria-hidden="true"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
