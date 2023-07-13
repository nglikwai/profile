import { Stack } from "@mui/material"
import { ProjectCard } from "@/components/ProjectCard"
import { projectData } from "./data"

export const ProjectProfile = () => {
    return (
        <Stack alignItems='center' style={{ background: '#ebe8e6' }} className="w-full py-10">
            <Stack alignItems='center' className="w-full xl:px-5" style={{ background: '#ebe8e6', maxWidth: 'var(--max-width)' }} >
                <p className="my-5">
                    Welcome to My Profolio. This is my projects done in past 5 years. Feel free to check them out.
                </p>
                <div className="grid grid-cols-4 w-full my-12 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {
                        projectData.map((project, index) =>
                            <ProjectCard
                                key={index}
                                mainImage={project.mainImage}
                                projectName={project.projectName}
                                type={project.type}
                                details={project.details}
                                projectDescription={project.projectDescription} />)
                    }
                </div>
            </Stack>
        </Stack>

    )
}