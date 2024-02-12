import { useTranslation } from "@/app/i18n/client";
import { useApp } from "@/context/app";
import { useEffect, useState } from "react";

const TitleRolling = () => {
  const { lng } = useApp();

  const { t } = useTranslation(lng);

  const title = t("main.title");

  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    if (currentTitle === title.length) return;
    const timer = setInterval(() => {
      setCurrentTitle((prev) => prev + 1);
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <h1 className="font-black text-6xl leading-snug xl:!w-full md:text-5xl sm:text-3xl w-[700px] min-h-[165px] md:min-h-[100px] sm:min-h-[60px] text-center tracking-wider">
      {title.slice(0, currentTitle)}
      <span className="border border-black animate-ping ml-3"></span>
    </h1>
  );
};

export default TitleRolling;
