import { Stack } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';

export const Footer = () => {
    return (
        <footer className="w-screen">
            <Stack className="bg-primary items-center text-white py-12">
                <Stack style={{ maxWidth: 'var(--max-width)' }} className="w-full items-center">
                    <h1 className="text-4xl font-bold my-5">Wanna Build a Web?</h1>
                    <button className="border-white px-5 py-2 border-2 my-5 text-lg">Contact Me</button>
                </Stack>
            </Stack>
            <Stack className="items-center py-5">
                <Stack style={{ maxWidth: 'var(--max-width)' }} className="w-full items-center">
                    <div className="flex justify-between w-full md:px-3">
                        <div>Copyright 2023 – LIK WAI</div>
                        <FacebookIcon />
                    </div>
                </Stack>
            </Stack>
        </footer>


    )
}