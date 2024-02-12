"use client";

import { Footer } from "@/components/global/Footer";
import { Header } from "@/components/global/Header";
import { Stack } from "@mui/material";
import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const PageWrapper: FC<Props> = ({ children }) => {
  return (
    <Stack className="w-full items-center overflow-hidden relative">
      <Stack
        className="w-full h-screen overflow-y-auto overflow-x-hidden items-center pt-8"
        style={{ perspective: "10px" }}
      >
        <Header />
        {children}
        <div
          className="w-full bg-[#ebe8e6]"
          style={{ transform: "translateZ(-2px) scale(1.2) translateY(900px)" }}
        >
          <Footer />
        </div>
      </Stack>
    </Stack>
  );
};
