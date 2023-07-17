import { PageWrapper } from "@/components/global/PageWrapper";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Main } from "@/components/Main";
import { ProjectProfile } from "@/components/ProjectProfile";
import { NextPage } from "next";


const Home = () => {
  return (
    <PageWrapper>
      <Main />
      <ProjectProfile />
    </PageWrapper>

  )
}

export default Home
