import { PageWrapper } from "@/components/global/PageWrapper";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Main } from "@/components/Main";
import { ProjectProfile } from "@/components/ProjectProfile";


export default function Home() {
  return (
    <PageWrapper>
      <Main />
      <ProjectProfile />
    </PageWrapper>

  )
}
