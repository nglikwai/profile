"use client";
import { useMemo } from "react";
import { PROJECTS } from "@/lib/projects";

const ICON_IE = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><text x="3" y="26" font-family="Times New Roman, serif" font-style="italic" font-weight="bold" font-size="30" fill="#1a9af7">e</text><path d="M2 19 C6 9 26 9 30 13" fill="none" stroke="#ffd34d" stroke-width="3" stroke-linecap="round"/></svg>`
)}`;

interface Props {
  onOpenProject: (id: string) => void;
}

export default function ProfileWindow({ onOpenProject }: Props) {
  const visitorCount = useMemo(
    () => String(4000 + Math.floor(Math.random() * 5000)).padStart(7, "0"),
    []
  );

  return (
    <>
      <div className="menu-bar">
        <span><u>F</u>ile</span>
        <span><u>E</u>dit</span>
        <span><u>V</u>iew</span>
        <span>F<u>a</u>vorites</span>
        <span><u>T</u>ools</span>
        <span><u>H</u>elp</span>
      </div>
      <div className="ie-toolbar">
        <button>&#11013; Back</button>
        <button>&#10145; Forward</button>
        <button>&#10006; Stop</button>
        <button>&#8635; Refresh</button>
        <button>&#127968; Home</button>
      </div>
      <div className="address-bar">
        <span>A<u>d</u>dress</span>
        <span className="field">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ICON_IE} width={14} height={14} alt="" />
          http://www.nglikwai.com/index.html
        </span>
        <button>Go</button>
      </div>
      <div className="window-body">
        <div className="homepage">
          <div style={{ overflow: "hidden", color: "#ff0000", fontWeight: "bold" }}>
            <div style={{ whiteSpace: "nowrap", display: "inline-block", animation: "marquee 18s linear infinite" }}>
              &#9733;&#9733;&#9733; Welcome to my personal homepage !!! Thanks for visiting !!! &#9733;&#9733;&#9733;
            </div>
          </div>
          <h1>~ LIK WAI NG&apos;s Home Page ~</h1>
          <p style={{ textAlign: "center" }}>
            <b>Full Stack Developer</b> from United Kingdom &#127468;&#127463;
          </p>
          <hr />
          <h2>&#128075; About Me</h2>
          <p>
            A full stack programmer with years of experience. Passionate about building
            beautiful websites. Every project is unique, and I thrive on the diversity
            of challenges presented by various technology stacks.
          </p>
          <p>
            However, I don&apos;t settle for the status quo; I continually question and
            reassess my methodologies, and stay at the forefront of innovation by
            exploring emerging tools and frameworks.
          </p>
          <h2>&#128187; Technologies</h2>
          <table>
            <tbody>
              <tr><th>Frontend</th><td>HTML, CSS, JavaScript, React, Next.js, Vue.js</td></tr>
              <tr><th>Backend</th><td>Node.js, Nest.js, Laravel</td></tr>
              <tr><th>Other</th><td>TypeScript, REST API, Swagger, CMS</td></tr>
            </tbody>
          </table>
          <h2>&#128193; My Projects</h2>
          <p style={{ textAlign: "center" }}>
            Double-click the icons on the desktop, or click a link below:
          </p>
          <p style={{ textAlign: "center" }}>
            {PROJECTS.map((p, i) => (
              <span key={p.id}>
                {i > 0 && " · "}
                <a href="#" onClick={(e) => { e.preventDefault(); onOpenProject(p.id); }}>
                  {p.name}
                </a>{" "}
                <span className="small">({p.type})</span>
              </span>
            ))}
          </p>
          <h2>&#9993; Contact Me</h2>
          <p style={{ textAlign: "center" }}>
            E-mail:{" "}
            <a href="mailto:likwai0430@gmail.com">likwai0430@gmail.com</a>
            <br />
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/likwai/" target="_blank" rel="noreferrer">
              linkedin.com/in/likwai
            </a>
            <br />
            GitHub:{" "}
            <a href="https://github.com/nglikwai" target="_blank" rel="noreferrer">
              github.com/nglikwai
            </a>
            <br />
            WhatsApp:{" "}
            <a href="https://wa.me/+447784896298" target="_blank" rel="noreferrer">
              +44 7784  896298
            </a>
          </p>
          <hr />
          <p style={{ textAlign: "center" }}>
            You are visitor number{" "}
            <span className="counter">{visitorCount}</span>
          </p>
          <p className="small" style={{ textAlign: "center" }}>
            Best viewed with Internet Explorer 4.0 at 800×600 resolution.
            <br />
            &copy; 1998&ndash;{new Date().getFullYear()} LIK WAI NG. All rights reserved.
          </p>
        </div>
      </div>
      <div className="status-bar">
        <span className="cell grow">Done</span>
        <span className="cell">&#127760; Internet</span>
      </div>
    </>
  );
}
