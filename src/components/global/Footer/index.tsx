"use client";
import { Box, Modal, Stack } from "@mui/material";
import Link from "next/link";
import { FC, useState } from "react";
import { modalStyle } from "@/components/ProjectCard/style";
import Image from "next/image";
import { useApp } from "@/context/app";
import { useTranslation } from "@/app/i18n/client";
import { useFadeIn } from "@/hook";
import Wheel from "@/components/Wheel";
import Copyright from "@/components/Copyright";

type props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
const ContactModal: FC<props> = ({ open, setOpen }) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box sx={modalStyle(600)} className="flex justify-around md:w-full">
        <Link
          href="mailto:likwai0430@gmail.com"
          target="_blank"
          className="border-white px-5 py-2 border-2 my-5 text-lg rounded-xl"
        >
          <Image
            src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
            width={150}
            height={150}
            alt="mail"
          />
        </Link>
        <Link
          href="https://wa.me/+85267080577"
          target="_blank"
          className="border-white px-5 py-2 border-2 my-5 text-lg rounded-xl"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/640px-WhatsApp_icon.png"
            width={150}
            height={150}
            alt="whatsapp"
          />
        </Link>
      </Box>
    </Modal>
  );
};

export const Footer = () => {
  const [open, setOpen] = useState(false);
  const { contactRef, lng } = useApp();
  const { t } = useTranslation(lng);
  const { props, isVisible } = useFadeIn();

  return (
    <footer className="w-screen relative h-full flex flex-col justify-between">
      <Stack
        direction="row"
        className="w-full justify-center group bg-primary  items-center text-white py-10 rounded-tl-[7%] md:rounded-[5%] sm:rounded-none  lg:rounded-[15%] transition duration-500 h-[90vh] md:pt-5"
      >
        <div className="max-w-[var(--max-width)] flex justify-between w-full xl:px-10">
          <Stack className="w-[700px] flex z-10 max-w-[var(--max-width)]">
            <div {...props} className="">
              <h1 className="text-4xl font-bold my-10">{t("footer.title")}</h1>
              <article className="md:w-full leading-8 [&>p]:my-8 text-xl sm:text-lg sm:leading-2 sm:font-light">
                <p>{t("footer.sentences-1")}</p>
                <p>{t("footer.sentences-2")}</p>
              </article>
            </div>

            <div {...props}>
              <button
                onClick={() => setOpen(true)}
                className="border-white px-7 py-4 border-4 mt-10 text-lg rounded-3xl  font-bold tracking-widest uppercase shadow-xl drop-shadow-[0_0_10px_white] hover:drop-shadow-[0_0_20px_white] transition-all"
              >
                {t("footer.contactMe")}
              </button>
            </div>
          </Stack>

          <div className="absolute z-0 top-[40%] right-0">
            <Wheel />
          </div>
        </div>
      </Stack>
      <div ref={contactRef}>
        <Copyright />
      </div>

      <ContactModal open={open} setOpen={setOpen} />
    </footer>
  );
};
