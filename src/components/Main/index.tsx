"use client";
import { useApp } from "@/context/app";
import { Button, Stack } from "@mui/material";
import Image from "next/image";
import ProfileImage from "public/raft-illustration.svg";
import { useTranslation } from "@/app/i18n/client";
import TitleRolling from "../TitleRolling";
import Vapour from "../Vapour";
import { useFadeIn } from "@/hook";

export const Main = (prop: any) => {
  const { setContactOpen, lng } = useApp();
  const { t } = useTranslation(lng);
  const { props } = useFadeIn();
  return (
    <Stack {...prop} alignItems="center" margin="3rem">
      <TitleRolling />
      <div {...props}>
        <p
          className="text-2xl leading-10 my-7 md:!w-full md:text-xl sm:text-lg tracking-wide sm:font-light"
          style={{ width: "700px", textAlign: "center" }}
        >
          {t("main.description")}
        </p>
      </div>

      <Button
        className="my-5 text-lg px-5 py-3 animate-bounce rounded-2xl"
        onClick={() => setContactOpen(true)}
      >
        {t("header.contact")}
      </Button>
      <div className="relative">
        <div className="absolute bottom-[200px]">
          <Vapour />
        </div>
        <Image
          src={ProfileImage}
          width={760}
          height={760}
          alt="Picture of the author"
          className="my-10 md:w-full"
        />
      </div>
    </Stack>
  );
};
