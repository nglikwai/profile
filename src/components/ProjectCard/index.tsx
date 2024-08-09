import { Box, Chip, Modal } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { modalStyle } from "./style";
import { ImageModal } from "../ImageModal";
import ClearIcon from "@mui/icons-material/Clear";
import { useTranslation } from "@/app/i18n/client";
import { useApp } from "@/context/app";
import { useFadeIn } from "@/hook";

type Screencap = {
  image: StaticImageData | string;
  description: string;
};

type props = {
  projectName: string;
  projectDescription: string;
  type: string;
  height?: string;
  details: { screencaps: Screencap[]; url?: string };
  mainImage: StaticImageData | string;
};

const WebLink = ({ url }: { url?: string }) => {
  const { lng } = useApp();
  const { t } = useTranslation(lng);

  return url ? (
    <Link
      href={url}
      target="_blank"
      className="w-36 flex items-center text-white rounded-lg px-4 py-2 active:scale-95 "
      style={{ background: "var(--primary-color)" }}
    >
      <VisibilityIcon sx={{ marginRight: "4px" }} />
      {t("profolio.visit")}
    </Link>
  ) : (
    <button className="flex items-center text-white rounded-lg px-4 py-2 active:scale-95 bg-gray-200 cursor-not-allowed">
      Internal
    </button>
  );
};

export const ProjectCard: FC<props> = ({
  projectName,
  projectDescription,
  type,
  details,
  mainImage,
  height,
}) => {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(-1);
  const { props } = useFadeIn();

  return (
    <div {...props}>
      <div
        className="group p-5 sm:p-0 hover:bg-[rgba(243,244,246,1)] rounded-2xl px-5 cursor-pointer duration-300 active:scale-[0.98] hover:drop-shadow-[0_0_10px_white] transition-all"
        onClick={() => setOpen(true)}
      >
        <div className="flex justify-center h-52 items-center ">
          <Image
            src={mainImage}
            width={200}
            height={400}
            style={
              height
                ? { width: "100%", height: "auto" }
                : { width: "100px", height: "auto" }
            }
            alt="Picture of the author"
            className="my-10 md:h-auto group-hover:animate-bounce"
          />
        </div>

        <h3 className="text-xl sm:text-lg font-black sm:font-bold tracking-wide sm:text-center">
          {projectName}
        </h3>
        <Chip
          label={type}
          className="my-5 p-2 sm:hidden text-lg sm:text-sm font-light tracking-wider shadow"
        />
        <p className="my-2 text-lg sm:hidden font-light">
          {projectDescription}
        </p>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle()} className="px-20 md:!w-full md:px-3 relative">
          <button
            onClick={() => setOpen(false)}
            className="text-gray-300 hover:text-red-300 transition sticky top-0 float-right "
          >
            <ClearIcon />
          </button>
          <WebLink url={details?.url} />

          <p className="my-2 hidden sm:block pt-10 font-light">
            {projectDescription}
          </p>

          {details.screencaps.map((screencap, index) => (
            <div
              key={index}
              className="flex items-center md:flex-col md:border-b md:pb-5 border-gray-100"
            >
              <Image
                src={screencap.image}
                alt="Picture of the author"
                className="my-10 mr-28 md:mr-5 cursor-pointer rounded-2xl"
                width={250}
                height={250}
                onClick={() => setActiveImage(index)}
              />
              <p className="my-2 w-96 text-lg sm:text-base md:px-3 sm:font-light">
                {screencap.description}
              </p>

              <ImageModal
                image={screencap.image}
                activeImage={activeImage}
                index={index}
                setActiveImage={setActiveImage}
              />
            </div>
          ))}
          <div className="flex justify-center my-5">
            <WebLink url={details?.url} />
          </div>
        </Box>
      </Modal>
    </div>
  );
};
