import { Box, Modal } from "@mui/material"
import { FC, useState } from "react"
import { imageModalStyle } from "../ProjectCard/style"
import Image, { StaticImageData } from "next/image"


type Props = {
    image: StaticImageData | string,
    activeImage: number
    index: number
    setActiveImage: (b: number) => void
}

export const ImageModal: FC<Props> = ({ image, activeImage, index, setActiveImage }) => {
    console.log(activeImage, index)
    return (
        <Modal
            open={activeImage === index}
            onClose={() => setActiveImage(-1)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={imageModalStyle} className='px-20 md:!w-full md:px-3 relative'>
                <div className="flex justify-end">
                    <button
                        onClick={() => setActiveImage(-1)}
                        className="text-gray-600 hover:text-red-700 transition">
                        ✕
                    </button>
                </div>
                <div>
                    <Image
                        width={'1000'}
                        height={'1000'}
                        src={image}
                        alt="Picture of the author"
                        className="my-10 mr-28 md:mr-5 h-full rounded-2xl"
                    />
                </div>

            </Box>
        </Modal>
    )

}