"use client";
import { useState } from "react";
import Image from "next/image";
import { Project } from "@/lib/projects";

interface Props {
  project: Project;
}

export default function ProjectWindow({ project }: Props) {
  const [index, setIndex] = useState(0);
  const cap = project.screencaps[index];
  const total = project.screencaps.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <>
      <div className="menu-bar">
        <span><u>F</u>ile</span>
        <span><u>V</u>iew</span>
        <span><u>H</u>elp</span>
      </div>
      <div className="window-body gray">
        <div className="viewer">
          <div className="screen">
            <Image
              key={cap.image}
              src={cap.image}
              alt={project.name}
              width={600}
              height={400}
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
              unoptimized
            />
          </div>
          <div className="caption">{cap.description}</div>
          <div className="controls">
            <button onClick={prev}>&#9664; Prev</button>
            <button onClick={next}>Next &#9654;</button>
            <span className="spacer" />
            {project.url && (
              <button onClick={() => window.open(project.url!, "_blank")}>
                &#127760; Visit Website
              </button>
            )}
          </div>
        </div>
        <div className="status-bar">
          <span className="cell grow">{project.description}</span>
          <span className="cell">
            {index + 1} of {total}
          </span>
        </div>
      </div>
    </>
  );
}
