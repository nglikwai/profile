import { Button, Stack } from "@mui/material"

export const Footer = () => {
    return (
        <footer className="w-screen">
            <Stack className="bg-primary items-center text-white py-10">
                <Stack style={{ maxWidth: 'var(--max-width)' }} className="w-full items-center">
                    <h1 className="text-3xl font-bold my-5">Wanna Build a Web?</h1>
                    <button className="border-white px-5 py-2 border-2 my-5">Contact Me</button>
                </Stack>
            </Stack>
            <Stack className="items-center py-5 text-sm">
                <Stack style={{ maxWidth: 'var(--max-width)' }} className="w-full items-center">
                    <div className="flex justify-between w-full">
                        <div>Copyright 2023 – LIK WAI</div>
                        <div>2023</div>
                    </div>
                </Stack>
            </Stack>
        </footer>


    )
}