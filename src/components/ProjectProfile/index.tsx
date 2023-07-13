import { Grid, Stack } from "@mui/material"
import { ProjectCard } from "@/components/ProjectCard"

const projectData = [
    {
        projectName: 'TUTOR',
        type: 'Full Stack',
        projectDescription: 'TUTOR is a tutorial plateform aims to match students with tutors by free. It is a full stack project built with React, Node.js, Express.js, MongoDB, and Firebase.'
    },
    {
        projectName: 'LOGL',
        type: 'Frontend',
        projectDescription: 'It is a government system offer organization to book venue for their events.'
    },
    {
        projectName: 'K Dollar',
        type: 'Backend',
        projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nisl nunc aliquet nunc, quis aliquam nisl nunc auctor nisl.'
    },
    {
        projectName: 'DSE00',
        type: 'Full Stack',
        projectDescription: 'DSE00 is a blog providing useful information for middle school students to prepare for their DSE examination.'
    },
    {
        projectName: 'CIMS2',
        type: 'Full Stack',
        projectDescription: 'Clinical Information Management System (2nd generation) is a system for doctors to manage their patients and their medical records.'
    }
]

export const ProjectProfile = () => {
    return (
        <Stack alignItems='center' style={{ background: '#ebe8e6' }} className="w-full py-10">
            <Stack alignItems='center' className="w-full xl:px-5" style={{ background: '#ebe8e6', maxWidth: 'var(--max-width)' }} >
                <p className="my-5">
                    Welcome to My Profolio. This is my projects done in past 5 years. Feel free to check them out.
                </p>
                <div className="grid grid-cols-4 w-full gap-x-5 my-12 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {
                        projectData.map((project, index) =>
                            <ProjectCard
                                key={index}
                                projectName={project.projectName}
                                type={project.type}
                                projectDescription={project.projectDescription} />)
                    }
                </div>
            </Stack>
        </Stack>

    )
}