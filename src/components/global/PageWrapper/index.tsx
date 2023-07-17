"use client";

import { Footer } from "@/components/global/Footer";
import { Header } from "@/components/global/Header";
import { Stack } from "@mui/material";
import { FC } from "react";

type Props = {
    children: React.ReactNode
}

export const PageWrapper: FC<Props> = ({ children }) => {

    return (
        <Stack className="w-full items-center pt-8">
            <Stack className="items-center">
                <Header />
                {children}
                <Footer />
            </Stack>
        </Stack>
    )
}