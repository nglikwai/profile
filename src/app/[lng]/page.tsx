import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Main } from "@/components/Main";
import { ProjectProfile } from "@/components/ProjectProfile";
import { Footer } from "@/components/global/Footer";
import { Header } from "@/components/global/Header";
import { Stack } from "@mui/material";

const Home = () => {
  return (
    <Stack className="w-full items-center overflow-hidden relative">
      <Stack
        className="w-full h-screen overflow-y-auto overflow-x-hidden items-center pt-8"
        style={{ perspective: "10px" }}
      >
        <Header />
        <Main style={{ transform: "translateZ(-10px) scale(2)" }} />

        <div
          className="w-full pb-[850px] sm:pb-[0px] sm:!translate-y-[900] profile-wrapper"
          style={{
            transform: "translateZ(-5px) scale(1.5) translateY(900px)",
          }}
        >
          <ProjectProfile />

          <Footer />
        </div>
      </Stack>
    </Stack>
  );
};

export default Home;
