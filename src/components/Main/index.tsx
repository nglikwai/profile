"use client";
import { useApp } from "@/context/app";
import { Button, Stack } from "@mui/material";
import Image from "next/image"
import ProfileImage from "public/raft-illustration.svg";
import { useTranslation } from "@/app/i18n/client";


export const Main = () => {

    const { scrollToProjectRef, lng } = useApp()
    const { t } = useTranslation(lng)

    return (
        <Stack alignItems='center' margin='3rem'>
            <h1 className="text-6xl font-bold leading-snug xl:!w-full md:text-3xl" style={{ width: '600px', textAlign: 'center' }}>
                {t('main.title')}
            </h1>
            <p className="text-2xl leading-9 my-7 md:!w-full md:text-xl sm:text-lg" style={{ width: '700px', textAlign: 'center' }}>
                {t('main.description')}
            </p>
            <Button className="my-5 text-lg px-4 py-2" onClick={scrollToProjectRef}> {t('main.learnMore')}</Button>
            <Image
                src={ProfileImage}
                width={760}
                height={760}
                alt="Picture of the author"
                className="my-10 md:w-full"
            />
        </Stack>
    )
}