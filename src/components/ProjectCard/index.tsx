import { Chip } from "@mui/material";
import Image from "next/image"
import { type } from "os";
import ProfileImage from "public/raft-illustration.svg";
import { FC } from "react";


type props = {
    projectName: string,
    projectDescription: string,
    type: string
}
export const ProjectCard: FC<props> = ({ projectName, projectDescription, type }) => {
    return (
        <div className=" p-5">
            <Image
                src={ProfileImage}
                alt="Picture of the author"
                className="my-10 md:w-full"
            />
            <h3 className="text-xl font-bold">{projectName}</h3>
            <Chip label={type} className="my-5" />
            <p className="my-2">{projectDescription}</p>
        </div>
    )
}