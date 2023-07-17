import { PageWrapper } from "@/components/global/PageWrapper";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Main } from "@/components/Main";
import { ProjectProfile } from "@/components/ProjectProfile";
import { NextPage } from "next";

type props = {
  params: {
    lng: string
  }
}
const Home: NextPage<props> = ({ params: { lng } }) => {
  return (
    <PageWrapper>
      <Main lng={lng} />
      <ProjectProfile lng={lng} />
    </PageWrapper>

  )
}

export default Home
