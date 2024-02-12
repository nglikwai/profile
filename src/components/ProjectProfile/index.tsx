"use client";

import { Stack } from "@mui/material";
import { ProjectCard } from "@/components/ProjectCard";
import { projectData } from "./data";
import { useApp } from "@/context/app";
import { useTranslation } from "@/app/i18n/client";

type DataObject = {
  zh: any;
  en: any;
};

export const ProjectProfile = (props: any) => {
  const { projectRef, lng } = useApp();
  const { t } = useTranslation(lng);

  return (
    <Stack
      alignItems="center"
      style={{ background: "#ebe8e6" }}
      className="w-full py-10 rounded-t-[10%] drop-shadow-[0_-20px_10px_#dddddd77]"
      ref={projectRef}
      {...props}
    >
      <Stack
        alignItems="center"
        className="w-full xl:px-5"
        style={{ background: "#ebe8e6", maxWidth: "var(--max-width)" }}
      >
        <p className="my-5 mt-20 text-2xl md:text-lg md:w-full tracking-wide w-1/2 text-center leading-[50px]">
          {t("profolio.description")}
        </p>
        <div className="grid grid-cols-4 w-full my-12 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {projectData[lng as keyof DataObject].map((project, index) => (
            <ProjectCard
              key={index}
              mainImage={project.mainImage}
              projectName={project.projectName}
              type={project.type}
              details={project.details}
              height={project?.height}
              projectDescription={project.projectDescription}
            />
          ))}
        </div>
      </Stack>
    </Stack>
  );
};
