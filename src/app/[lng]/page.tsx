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
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Image from "next/image";
import ClientMain from "public/images/clients-main.svg";
import Server from "public/images/server.svg";
import "odometer/themes/odometer-theme-default.css";
import OdometerComponent from "@/components/OdometerComponent";

const Home = () => {
  const parallax = useRef<IParallax>(null!);

  return (
    <Stack className="w-full h-full items-center overflow-hidden relative">
      <Stack className="w-full min-h-screen overflow-x-hidden items-center">
        <Parallax ref={parallax} pages={3}>
          <ParallaxLayer offset={0} speed={-0.7}>
            <Header />
          </ParallaxLayer>

          <ParallaxLayer offset={0.1} speed={0.1}>
            <Main />
          </ParallaxLayer>

          <ParallaxLayer offset={0.98} speed={0.2}>
            <Image
              src={ClientMain}
              alt="Picture of the author"
              className="my-10 md:w-full ml-[20%] sm:w-40 sm:ml-[10%]"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={0.99} speed={0.1}>
            <Image
              src={ClientMain}
              alt="Picture of the author"
              className="my-10 md:w-full ml-[60%]"
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.5}>
            <ProjectProfile />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.5} style={{ zIndex: -1 }}>
            <Image
              src={Server}
              alt="Picture of the author"
              className="my-10 md:w-full ml-[17%] sm:ml-[10%] sm:w-40"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.2} style={{ zIndex: -1 }}>
            <Image
              src={Server}
              alt="Picture of the author"
              className="my-10 md:w-full ml-[73%] sm:hidden"
            />
          </ParallaxLayer>
          <ParallaxLayer offset={2.1} speed={0.05} style={{ zIndex: -1 }}>
            <div className="w-screen flex justify-center sm:hidden">
              <div className="max-w-[var(--max-width)] flex flex-col gap-4">
                <div className="text-3xl font-bold uppercase">
                  DSE00 Accumulated Traffic
                </div>
                <OdometerComponent />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1}>
            <Footer />
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1}>
            <Footer />
          </ParallaxLayer>
        </Parallax>
      </Stack>
    </Stack>
  );
};

export default Home;
