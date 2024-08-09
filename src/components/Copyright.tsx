import { Stack } from "@mui/material";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { useFadeIn } from "@/hook";

const Copyright = () => {
  const { props } = useFadeIn();
  return (
    <Stack className="items-center py-10">
      <Stack
        style={{ maxWidth: "var(--max-width)" }}
        className="w-full items-center"
      >
        <div {...props} className="flex justify-between w-full md:px-3 ">
          <div>© 2024 – LIK WAI</div>
          <div className="items-center flex gap-4 font-light">
            <span className="sm:hidden">Manchester, United Kingdom</span>
            <Link href="https://www.linkedin.com/in/likwai/" target="_blank">
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </Stack>
    </Stack>
  );
};
export default Copyright;
