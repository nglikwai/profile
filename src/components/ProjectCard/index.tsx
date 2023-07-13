'use client'
import { Box, Chip, Modal } from "@mui/material";
import Image, { StaticImageData } from "next/image"
import Link from "next/link";
import ProfileImage from "public/raft-illustration.svg";
import { FC, useState } from "react";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { style } from "./style";

type Screencap = {
    image: StaticImageData | string,
    description: string
}

type props = {
    projectName: string,
    projectDescription: string,
    type: string,
    details: { screencaps: Screencap[], url?: string },
    mainImage: StaticImageData | string

}

const WebLink = ({ url }: { url?: string }) => {
    return (
        url ?
            <Link href={url} target="_blank" className="w-36 flex items-center text-white rounded-lg px-4 py-2 active:scale-95 " style={{ background: 'var(--primary-color)' }}>
                <VisibilityIcon sx={{ marginRight: '4px' }} />Visit Web
            </Link> :
            <button className="flex items-center text-white rounded-lg px-4 py-2 active:scale-95 bg-gray-200 cursor-not-allowed">
                Internal
            </button>

    )
}

export const ProjectCard: FC<props> = ({ projectName, projectDescription, type, details, mainImage }) => {
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    return (
        <>
            <div className=" p-5 hover:bg-gray-100 rounded-2xl px-5 cursor-pointer transition" onClick={() => setOpen(true)}>
                <div className="flex justify-center h-52 items-center">
                    <Image
                        src={mainImage}
                        height={130}
                        alt="Picture of the author"
                        className="my-10 md:w-full"
                    />
                </div>

                <h3 className="text-xl font-bold">{projectName}</h3>
                <Chip label={type} className="my-5 p-2 text-lg font-light" />
                <p className="my-2 text-lg font-light">{projectDescription}</p>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='px-20 md:!w-full md:px-5 relative'>
                    <div className="flex justify-between">
                        <WebLink url={details?.url} />
                        <button
                            onClick={() => setOpen(false)}
                            className="text-gray-300 hover:text-red-300 transition">
                            ✕
                        </button>
                    </div>


                    {
                        details.screencaps.map((screencap, index) =>
                            <div key={index} className="flex items-center">
                                <Image
                                    src={ProfileImage}
                                    alt="Picture of the author"
                                    className="my-10 mr-28 md:mr-5"
                                    width={250}
                                />
                                <p className="my-2 w-96 text-lg">{screencap.description}</p>
                            </div>)
                    }
                    <div className="flex justify-center my-5">
                        <WebLink url={details?.url} />
                    </div>

                </Box>
            </Modal>
        </>

    )
}