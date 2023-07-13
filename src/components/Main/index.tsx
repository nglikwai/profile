import { Button, Stack } from "@mui/material";
import Image from "next/image"
import ProfileImage from "public/raft-illustration.svg";

export const Main = () => {
    return (
        <Stack alignItems='center' margin='3rem'>
            <h1 className="text-6xl font-bold leading-snug xl:!w-full md:text-3xl" style={{ width: '600px', textAlign: 'center' }}>
                My Profilelio Works in One Place
            </h1>
            <p className="text-2xl leading-9 my-7 md:!w-full md:text-xl sm:text-lg" style={{ width: '700px', textAlign: 'center' }}>
                A full stack programmer with 5 years of experience. Passionate about building a beautiful website.
            </p>
            <Button className="my-5 text-lg px-4 py-2">Learn More</Button>
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