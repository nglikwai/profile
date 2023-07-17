import { Box, Modal, Stack } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link";
import { FC, useState } from "react";
import { modalStyle } from "@/components/ProjectCard/style";
import Image from "next/image";
import { useApp } from "@/context/app";
import { useTranslation } from "@/app/i18n/client";


type props = {
    open: boolean,
    setOpen: (open: boolean) => void
}
const ContactModal: FC<props> = ({ open, setOpen }) => {
    return (
        <Modal open={open} onClose={() => setOpen(false)}
        >
            <Box sx={modalStyle(600)} className="flex justify-around md:w-full">
                <Link href="mailto:likwai@dse00.com" target="_blank" className="border-white px-5 py-2 border-2 my-5 text-lg rounded-xl">
                    <Image src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" width={150} height={150} alt="whatsapp" />
                </Link>
                <Link href="https://wa.me/+85267080577" target="_blank" className="border-white px-5 py-2 border-2 my-5 text-lg rounded-xl">
                    <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/640px-WhatsApp_icon.png" width={150} height={150} alt="whatsapp" />
                </Link>

            </Box>
        </Modal>
    )
}

export const Footer = () => {

    const [open, setOpen] = useState(false);
    const { contactRef, lng } = useApp()
    const { t } = useTranslation(lng)

    return (
        <footer className="w-screen" ref={contactRef}>
            <Stack className="bg-primary items-center text-white py-12">
                <Stack style={{ maxWidth: 'var(--max-width)' }} className="w-full items-center">
                    <h1 className="text-4xl font-bold my-5">{t('footer.title')}</h1>
                    <button onClick={() => setOpen(true)} className="border-white px-5 py-2 border-2 my-5 text-lg rounded-xl">{t('footer.contactMe')}</button>
                </Stack>
            </Stack>
            <Stack className="items-center py-5">
                <Stack style={{ maxWidth: 'var(--max-width)' }} className="w-full items-center">
                    <div className="flex justify-between w-full md:px-3">
                        <div>{t('footer.copyRight')} 2023 – LIK WAI</div>
                        <Link href="https://www.facebook.com/nglikwai/" target="_blank"><FacebookIcon /></Link>
                    </div>
                </Stack>
            </Stack>
            <ContactModal open={open} setOpen={setOpen} />
        </footer>


    )
}