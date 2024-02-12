"use client";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Main } from "@/components/Main";
import { ProjectProfile } from "@/components/ProjectProfile";
import { Footer } from "@/components/global/Footer";
import { Header } from "@/components/global/Header";
import { Stack } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const Home = () => {
  const ref = useRef(null);
  const [yCoord, setYCoord] = useState(2700);
  useEffect(() => {
    if (ref.current) {
      const rect = (ref.current as HTMLElement).getBoundingClientRect();
      const yCoord = rect.top + window.pageYOffset;
      setYCoord(yCoord);
    }
  }, []);
  return (
    <Stack className="w-full items-center overflow-hidden relative">
      <Stack
        className="w-full h-screen overflow-y-auto overflow-x-hidden items-center pt-8"
        style={{ perspective: "10px" }}
      >
        <Header />
        <Main style={{ transform: "translateZ(-10px) scale(2)" }} />

        <div
          className="w-full sm:pb-[0px] sm:!translate-y-[900] profile-wrapper"
          style={
            {
              transform: "translateZ(-5px) scale(1.5) translateY(900px)",
              "--i": yCoord,
            } as React.CSSProperties
          }
        >
          <ProjectProfile />
          <div ref={ref}>
            <Footer />
          </div>
        </div>
      </Stack>
    </Stack>
  );
};

export default Home;
