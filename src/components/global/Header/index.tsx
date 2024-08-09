"use client";
import { useApp } from "@/context/app";
import { useRouter } from "next/navigation";
import { languages, languagesMap } from "@/app/i18n/settings";
import { useTranslation } from "@/app/i18n/client";
import UnderlineButton from "../UnderlineButton";
import MenuDrawer from "@/components/MenuDrawer";

export const Header = () => {
  const { scrollToContactRef, lng } = useApp();
  const { t } = useTranslation(lng);
  const router = useRouter();

  const l = languages.find((l) => l !== lng) ?? "en";

  const switchLanguage = () => {
    router.push(`/${l}`);
  };

  return (
    <div className="w-screen flex justify-center">
      <header
        className="flex justify-between w-full xl:px-5 pt-8"
        style={{ maxWidth: "var(--max-width)" }}
      >
        <div
          className="text-3xl md:text-2xl font-bold cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          LIK WAI
        </div>
        <div className="flex [&>*:not(:last-child)]:mr-10 text-lg sm:hidden">
          <UnderlineButton
            callback={scrollToContactRef}
            title={t("header.contact")}
          />

          <UnderlineButton
            callback={switchLanguage}
            title={languagesMap[l as keyof typeof languagesMap]}
          />
        </div>
        <div className="hidden sm:block">
          <MenuDrawer switchLanguage={switchLanguage} />
        </div>
      </header>
    </div>
  );
};
