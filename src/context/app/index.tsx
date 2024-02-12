"use client";
import { useParams } from "next/navigation";
import {
  useContext,
  useRef,
  RefObject,
  createContext,
  useState,
  useEffect,
} from "react";

type AppContextType = {
  projectRef?: RefObject<HTMLDivElement>;
  contactRef?: RefObject<HTMLDivElement>;
  lng?: string;
  scrollToProjectRef?: () => void;
  scrollToContactRef?: () => void;
};

const AppContext = createContext<AppContextType>({});
export const useApp = () => useContext(AppContext);

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const params = useParams();
  const lng = params.lng;

  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: RefObject<HTMLDivElement>) => () =>
    ref?.current?.scrollIntoView({ behavior: "smooth" });

  const scrollToProjectRef = scrollToRef(projectRef);
  const scrollToContactRef = scrollToRef(contactRef);

  useEffect(() => {
    console.log(navigator)
    if (
      navigator.userAgent.indexOf("Safari") != -1 &&
      navigator.userAgent.indexOf("Chrome") == -1
    ) {
      document.documentElement.classList.add("safari");
    }
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          lng,
          projectRef,
          contactRef,
          scrollToProjectRef,
          scrollToContactRef,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppProvider;
