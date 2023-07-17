"use client";

import { Stack } from "@mui/material"
import { ProjectCard } from "@/components/ProjectCard"
import { projectData } from "./data"
import { FC, RefObject, useRef } from "react";
import { useApp } from "@/context/app";
import { useTranslation } from "@/app/i18n/client";

type DataObject = {
    zh: any,
    en: any
}

export const ProjectProfile = () => {
    const { projectRef, lng } = useApp()
    const { t } = useTranslation(lng)


    return (
        <Stack alignItems='center' style={{ background: '#ebe8e6' }} className="w-full py-10" ref={projectRef}>
            <Stack alignItems='center' className="w-full xl:px-5" style={{ background: '#ebe8e6', maxWidth: 'var(--max-width)' }} >
                <p className="my-5 text-lg">
                    {t('profolio.description')}
                </p>
                <div className="grid grid-cols-4 w-full my-12 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {
                        projectData[lng as keyof DataObject].map((project, index) =>
                            <ProjectCard
                                key={index}
                                mainImage={project.mainImage}
                                projectName={project.projectName}
                                type={project.type}
                                details={project.details}
                                height={project?.height}
                                projectDescription={project.projectDescription}
                            />)
                    }
                </div>
            </Stack>
        </Stack>

    )
}